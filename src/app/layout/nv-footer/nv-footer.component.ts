import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nv-footer',
  templateUrl: './nv-footer.component.html',
  styleUrls: ['./nv-footer.component.scss']
})
export class NvFooterComponent implements OnInit {
  flagIcon = "../../../assets/icons/ico.flag.svg";
  public Domain =[
    'English',
    'French',
    'Chinese'
  ];
  public selectedItems = 'English';
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  onChange(e: any): void{
    const lang = e == 'English' ? 'en-US' : (e == 'French' ? 'fr-FR' : 'zh-CN');
    this.translate.use(lang);
  }
}
