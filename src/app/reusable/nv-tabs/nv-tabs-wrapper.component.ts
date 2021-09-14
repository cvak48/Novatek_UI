import { NgModule, Component, Compiler, ViewContainerRef, ViewChild, Input, ComponentRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core'

// Helper component to add dynamic components
@Component({
    selector: 'tab-wrapper',
    template: `<div #target></div>`
})
export class TabWrapper {
    @ViewChild('target', { read: ViewContainerRef }) target: any;
    @Input() type: any;
    cmpRef!: ComponentRef<any>;
    private isViewInitialized: boolean = false;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler,
        private cdRef: ChangeDetectorRef) { }

    updateComponent() {
        if (!this.isViewInitialized) {
            return;
        }
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }

        let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
        this.cmpRef = this.target.createComponent(factory)
        // to access the created instance use
        // this.compRef.instance.someProperty = 'someValue';
        // this.compRef.instance.someOutput.subscribe(val => doSomething());
        this.cdRef.detectChanges();
    }

    ngOnChanges() {
        this.updateComponent();
    }

    ngAfterViewInit() {
        this.isViewInitialized = true;
        this.updateComponent();
    }

    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}