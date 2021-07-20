'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">novatek documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-81b1b02c3b0f6b41368c6092e61cb1b9"' : 'data-target="#xs-components-links-module-AppModule-81b1b02c3b0f6b41368c6092e61cb1b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-81b1b02c3b0f6b41368c6092e61cb1b9"' :
                                            'id="xs-components-links-module-AppModule-81b1b02c3b0f6b41368c6092e61cb1b9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-12b98958c696376fbe748ed5dc22e46e"' : 'data-target="#xs-components-links-module-AuthModule-12b98958c696376fbe748ed5dc22e46e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-12b98958c696376fbe748ed5dc22e46e"' :
                                            'id="xs-components-links-module-AuthModule-12b98958c696376fbe748ed5dc22e46e"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutComponentModule.html" data-type="entity-link" >LayoutComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutComponentModule-ca832de2ca10d09f5a5931729a54f730"' : 'data-target="#xs-components-links-module-LayoutComponentModule-ca832de2ca10d09f5a5931729a54f730"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutComponentModule-ca832de2ca10d09f5a5931729a54f730"' :
                                            'id="xs-components-links-module-LayoutComponentModule-ca832de2ca10d09f5a5931729a54f730"' }>
                                            <li class="link">
                                                <a href="components/NovaFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NovaFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NovaLoginFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NovaLoginFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NovaSidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NovaSidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NvHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NvHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link" >MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainModule-17636c731af184651eff5d9d3f439ce6"' : 'data-target="#xs-components-links-module-MainModule-17636c731af184651eff5d9d3f439ce6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-17636c731af184651eff5d9d3f439ce6"' :
                                            'id="xs-components-links-module-MainModule-17636c731af184651eff5d9d3f439ce6"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DemoPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainRoutingModule.html" data-type="entity-link" >MainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReusableModule.html" data-type="entity-link" >ReusableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReusableModule-89a38ee9799f8a2264d5dd01c4dd18fb"' : 'data-target="#xs-components-links-module-ReusableModule-89a38ee9799f8a2264d5dd01c4dd18fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReusableModule-89a38ee9799f8a2264d5dd01c4dd18fb"' :
                                            'id="xs-components-links-module-ReusableModule-89a38ee9799f8a2264d5dd01c4dd18fb"' }>
                                            <li class="link">
                                                <a href="components/NovaFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NovaFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NovaLoginFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NovaLoginFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NovaSidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NovaSidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NvHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NvHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AvatarComponent.html" data-type="entity-link" >AvatarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CommentBoxComponent.html" data-type="entity-link" >CommentBoxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomDatatableComponent.html" data-type="entity-link" >CustomDatatableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FeedComponent.html" data-type="entity-link" >FeedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InvertedTabsComponent.html" data-type="entity-link" >InvertedTabsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LeftTabComponent.html" data-type="entity-link" >LeftTabComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotificationComponent.html" data-type="entity-link" >NotificationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NovatekLogoComponent.html" data-type="entity-link" >NovatekLogoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NvCustomComponentComponent.html" data-type="entity-link" >NvCustomComponentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NvDropdownComponent.html" data-type="entity-link" >NvDropdownComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PanelComponent.html" data-type="entity-link" >PanelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlaceholderBannerComponent.html" data-type="entity-link" >PlaceholderBannerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlaceholderBigCardComponent.html" data-type="entity-link" >PlaceholderBigCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlaceholderCardComponent.html" data-type="entity-link" >PlaceholderCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlaceholderListComponent.html" data-type="entity-link" >PlaceholderListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProgressiveBarComponent.html" data-type="entity-link" >ProgressiveBarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RattingComponent.html" data-type="entity-link" >RattingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RightTabComponent.html" data-type="entity-link" >RightTabComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchComponent.html" data-type="entity-link" >SearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SideNavComponent.html" data-type="entity-link" >SideNavComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabsComponent.html" data-type="entity-link" >TabsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabWrapper.html" data-type="entity-link" >TabWrapper</a>
                            </li>
                            <li class="link">
                                <a href="components/TestComponent.html" data-type="entity-link" >TestComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextAreaComponent.html" data-type="entity-link" >TextAreaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UploadComponent.html" data-type="entity-link" >UploadComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserProfileMenuComponent.html" data-type="entity-link" >UserProfileMenuComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/NvFileUploadDirective.html" data-type="entity-link" >NvFileUploadDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CommentNode.html" data-type="entity-link" >CommentNode</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CommonHttpService.html" data-type="entity-link" >CommonHttpService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Feed.html" data-type="entity-link" >Feed</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notification.html" data-type="entity-link" >Notification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Person.html" data-type="entity-link" >Person</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlaceHolderBanner.html" data-type="entity-link" >PlaceHolderBanner</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlaceholderBigCard.html" data-type="entity-link" >PlaceholderBigCard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlaceHolderCard.html" data-type="entity-link" >PlaceHolderCard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableColumn.html" data-type="entity-link" >TableColumn</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/AdvanceFilterPipe.html" data-type="entity-link" >AdvanceFilterPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/DataPropertyGetterPipe.html" data-type="entity-link" >DataPropertyGetterPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/FilterAllPipe.html" data-type="entity-link" >FilterAllPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/NvInitialsPipe.html" data-type="entity-link" >NvInitialsPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/NvInitialsPipe-1.html" data-type="entity-link" >NvInitialsPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/NvTrimPipe.html" data-type="entity-link" >NvTrimPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});