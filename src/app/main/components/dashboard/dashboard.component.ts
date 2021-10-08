import { CommentNode } from 'src/app/reusable/nv-comment-box/nv-comment-box.component';
import { Component, Input, OnInit } from '@angular/core';
import { NVTextAreaComponent } from 'src/app/reusable/nv-text-area/nv-text-area.component';
import { NVLogoComponent } from 'src/app/reusable/nv-logo/nv-logo.component';
import { MatTabHeaderPosition } from '@angular/material/tabs';
import { NvSearchComponent } from 'src/app/reusable/nv-search/nv-search.component';
import { PlaceHolderCardModel } from 'src/app/model/placeHolderCard-model';
import { PlaceHolderBannerModel } from 'src/app/model/placeHolderBanner-model';
import { PlaceholderBigCardModel } from 'src/app/model/PlaceholderBigCard-model';
import { Notification, Person } from 'src/app/model/data-model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  comments: Array<CommentNode> = [];
  position: MatTabHeaderPosition = 'below';
  types = [
    { component: NVTextAreaComponent, name: 'TabOne' },
    { component: NVLogoComponent, name: 'TabTwo' },
    { component: NVTextAreaComponent, name: 'TabThree' },
  ];
  rightTypes = [
    { component: NVLogoComponent, name: 'RTabOne' },
    { component: NvSearchComponent, name: 'RTabTwo' },
    { component: NVTextAreaComponent, name: 'RTabThree' },
    { component: NvSearchComponent, name: 'RTabFour' },
  ];
  invertedTypes = [
    { component: NvSearchComponent, name: 'ITabOne' },
    { component: NVLogoComponent, name: 'ITabTwo' },
    { component: NVTextAreaComponent, name: 'ITabThree' },
    { component: NvSearchComponent, name: 'ITabFour' },
  ];
  leftTypes = [
    { component: NvSearchComponent, name: 'lTabOne' },
    { component: NVLogoComponent, name: 'lTabTwo' },
    { component: NVTextAreaComponent, name: 'lTabThree' },
  ];
  progressiveColor: string = '#198515';
  progressiveStatus: string = '50%';
  // mockData for header
  @Input() person: Person = mockProfileMenu();
  avtar = '../../../../assets/images/avtar.jpg';
  cardData = {};
  bannerData = {};
  smallCardData = {};
  cardListData: any[] = [];
  cardSmallData = {};
  textCardData = {};
  SucessprogressiveBarValue: string = '90';
  warningProgressivebarValue: string = '70';
  dualwarningProgressivebarValue: string = '5';

  sucessTxt: string = 'Everything worked, your file is all ready';
  warningTxt: string = "Your file don't meet the minimum resolution";
  errorTxt: string = 'Tere was an error';
  textColor: string = 'red';
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en-US', 'fr-FR', 'zh-CN']);
    translate.setDefaultLang('en-US');
  }


  ngOnInit(): void {
    this.comments = [
      new CommentNode(
        'Hello',
        'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0'
      ),
    ];
    this.setPlaceHolderCarddata();
    this.setPlaceHolderBannerdata();
    this.setPlaceHolder1();
    this.setListData();
    this.setPlaceHolderSmallCardData();
    this.setPlaceHolderTextData();
  }

  setPlaceHolderCarddata(): void {
    this.cardData = {
      img: this.avtar,
      text1: 'Posted on May 20, 2018',
      text2: 'Posted on May 20, 2018',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
    ipsum aliquam metus facilisis scelerisque. Quisque vitae
    condimentum nulla. Vestibulum lobortis ullamcorper augue id
    consequat. Orci varius natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Phasellus at aliquet
    dui. Mauris dapibus lectus id laoreet iaculis. Duis auctor augue
    augue, eget lobortis quam auctor at.`,
    } as PlaceHolderCardModel;
  }

  setPlaceHolderTextData(): void {
    this.textCardData = [
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
      ipsum aliquam metus facilisis scelerisque. Quisque vitae
      condimentum nulla. Vestibulum lobortis ullamcorper augue id
      consequat.`,
      },
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
      ipsum aliquam metus facilisis scelerisque. Quisque vitae
      condimentum nulla. Vestibulum lobortis ullamcorper augue id
      consequat.`,
      },
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
      ipsum aliquam metus facilisis scelerisque. Quisque vitae
      condimentum nulla. Vestibulum lobortis ullamcorper augue id
      consequat.`,
      },
    ];
  }

  setPlaceHolderSmallCardData(): void {
    this.cardSmallData = [
      {
        img: this.avtar,
        text1: 'Tom Cruise',
        text2: 'Posted on May 20, 2018',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
    ipsum aliquam metus facilisis scelerisque. Quisque vitae
    condimentum nulla.`,
      },
      {
        img: this.avtar,
        text1: 'Tom Cruise',
        text2: 'Posted on May 20, 2018',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
    ipsum aliquam metus facilisis scelerisque. Quisque vitae
    condimentum nulla.`,
      },
      {
        img: this.avtar,
        text1: 'Tom Cruise',
        text2: 'Posted on May 20, 2018',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
    ipsum aliquam metus facilisis scelerisque. Quisque vitae
    condimentum nulla.`,
      },
    ];
  }

  setPlaceHolder1(): void {
    this.smallCardData = {
      img: this.avtar,
      text1: 'Posted on May 20, 2018',
      text2: 'Posted on May 20, 2018',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
    ipsum aliquam metus facilisis scelerisque. Quisque vitae
    condimentum nulla. Vestibulum lobortis ullamcorper augue id
    consequat. Orci varius natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Phasellus at aliquet
    dui. Mauris dapibus lectus id laoreet iaculis. Duis auctor augue
    augue, eget lobortis quam auctor at.`,
    } as PlaceholderBigCardModel;
  }
  setPlaceHolderBannerdata(): void {
    this.bannerData = {
      img: this.avtar,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
    ipsum aliquam metus facilisis scelerisque. Quisque vitae
    condimentum nulla. Vestibulum lobortis ullamcorper augue id
    consequat. Orci varius natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Phasellus at aliquet
    dui. Mauris dapibus lectus id laoreet iaculis. Duis auctor augue
    augue, eget lobortis quam auctor at.`,
    } as PlaceHolderBannerModel;
  }

  setListData(): void {
    this.cardListData = [{ element: 'listItem1' }, { element: 'listItem2' }];
  }
}

function mockProfileMenu(): Person {
  const avatarProps = {
    id: 1,
    name: 'Alex Green',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
    notification: {
      number: 200,
      content: '',
      hasAttachment: false,
    } as Notification,
  } as Person;
  return avatarProps;
}
