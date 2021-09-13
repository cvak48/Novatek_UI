import { CommentNode } from 'src/app/reusable/comment-box/comment-box.component';
import { Component, Input, OnInit } from '@angular/core';
import { TextAreaComponent } from 'src/app/reusable/text-area/text-area.component';
import { NovatekLogoComponent } from 'src/app/reusable/novatek-logo/novatek-logo.component';
import { MatTabHeaderPosition } from '@angular/material/tabs';
import { NvSearchComponent } from 'src/app/reusable/nv-search/nv-search.component';
import { PlaceHolderCard } from 'src/app/model/placeHolderCard';
import { PlaceHolderBanner } from 'src/app/model/placeHolderBanner';
import { PlaceholderBigCard } from 'src/app/model/PlaceholderBigCard';
import { Notification, Person } from 'src/app/model/data-model';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  comments:Array<CommentNode> = [];
  position: MatTabHeaderPosition = 'below';
  types = [{component:TextAreaComponent, name:'TabOne'}, {component:NovatekLogoComponent, name:'TabTwo'}, {component:TextAreaComponent, name:'TabThree'}];
  invertedTypes = [{component:NvSearchComponent, name:'ITabOne'}, {component:NovatekLogoComponent, name:'ITabTwo'}, {component:TextAreaComponent, name:'ITabThree'}, {component:NvSearchComponent, name:'ITabFour'}];
  leftTypes = [{component:NvSearchComponent, name:'lTabOne'}, {component:NovatekLogoComponent, name:'lTabTwo'}, {component:TextAreaComponent, name:'lTabThree'}];
  rightTypes = [{component:NovatekLogoComponent, name:'RTabOne'}, {component:NvSearchComponent, name:'RTabTwo'}, {component:TextAreaComponent, name:'RTabThree'}, {component:NvSearchComponent, name:'RTabFour'}];
  progressiveColor: string = '#198515';
  progressiveStatus:string = '50%'; 
  // mockData for header
  @Input() person: Person = mockProfileMenu();
  avtar = '../../../../assets/images/avtar.jpg';
  cardData = {};
  bannerData = {};
  smallCardData = {};
  listData: any[] = [];
  cardSmallData = {};
  textCardData= {};
  SucessprogressiveBarValue:string = '90';
  warningProgressivebarValue:string = '70';
  dualwarningProgressivebarValue:string = '5';

  sucessTxt: string = 'Everything worked, your file is all ready';
  warningTxt: string = "Your file don't meet the minimum resolution";
  errorTxt: string= "Tere was an error"
  textColor: string = 'red'
  constructor() {
   }

  ngOnInit(): void {
    this.comments =  [new CommentNode("Hello", "https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0")];
    this.setPlaceHolderCarddata();
    this.setPlaceHolderBannerdata();
    this.setPlaceHolder1();
    this.setListData();
    this.setPlaceHolderSmallCardData();
    this.setPlaceHolderTextData();
  }

  setPlaceHolderCarddata(): void {
    this.cardData = {'img': this.avtar,
    'text1':'Posted on May 20, 2018',
    'text2':'Posted on May 20, 2018',
    'description':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
    ipsum aliquam metus facilisis scelerisque. Quisque vitae
    condimentum nulla. Vestibulum lobortis ullamcorper augue id
    consequat. Orci varius natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Phasellus at aliquet
    dui. Mauris dapibus lectus id laoreet iaculis. Duis auctor augue
    augue, eget lobortis quam auctor at.`}as PlaceHolderCard;
  }

  setPlaceHolderTextData(): void {
    this.textCardData = [
      {'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
      ipsum aliquam metus facilisis scelerisque. Quisque vitae
      condimentum nulla. Vestibulum lobortis ullamcorper augue id
      consequat.`},
      {'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
      ipsum aliquam metus facilisis scelerisque. Quisque vitae
      condimentum nulla. Vestibulum lobortis ullamcorper augue id
      consequat.`},
      {'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
      ipsum aliquam metus facilisis scelerisque. Quisque vitae
      condimentum nulla. Vestibulum lobortis ullamcorper augue id
      consequat.`}
    ];
  }

  setPlaceHolderSmallCardData(): void {
    this.cardSmallData = [{'img': this.avtar,
    'text1':'Tom Cruise',
    'text2':'Posted on May 20, 2018',
    'description':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
    ipsum aliquam metus facilisis scelerisque. Quisque vitae
    condimentum nulla.`},
    {'img': this.avtar,
    'text1':'Tom Cruise',
    'text2':'Posted on May 20, 2018',
    'description':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
    ipsum aliquam metus facilisis scelerisque. Quisque vitae
    condimentum nulla.`},
    {'img': this.avtar,
    'text1':'Tom Cruise',
    'text2':'Posted on May 20, 2018',
    'description':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
    ipsum aliquam metus facilisis scelerisque. Quisque vitae
    condimentum nulla.`}
  ];
}


  setPlaceHolder1(): void {
    this.smallCardData = {'img': this.avtar,
    'text1':'Posted on May 20, 2018',
    'text2':'Posted on May 20, 2018',
    'description':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
    ipsum aliquam metus facilisis scelerisque. Quisque vitae
    condimentum nulla. Vestibulum lobortis ullamcorper augue id
    consequat. Orci varius natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Phasellus at aliquet
    dui. Mauris dapibus lectus id laoreet iaculis. Duis auctor augue
    augue, eget lobortis quam auctor at.`} as PlaceholderBigCard;
  }
  setPlaceHolderBannerdata(): void {
    this.bannerData = {'img': this.avtar,
    'description':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
    ipsum aliquam metus facilisis scelerisque. Quisque vitae
    condimentum nulla. Vestibulum lobortis ullamcorper augue id
    consequat. Orci varius natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Phasellus at aliquet
    dui. Mauris dapibus lectus id laoreet iaculis. Duis auctor augue
    augue, eget lobortis quam auctor at.`} as PlaceHolderBanner;
  }

  

 setListData(): void{
    this.listData = [{'element': 'listItem1'},
                       {'element': 'listItem2'}];
  }
}


function mockProfileMenu(): Person {
  const avatarProps = {
    id: 1,
    name: 'Alex Green',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
    notification: {
      number: 200,
      content: '',
      hasAttachment: false,
    } as Notification,
  } as Person;
  return avatarProps;
}