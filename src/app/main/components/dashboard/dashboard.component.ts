import { CommentNode } from 'src/app/reusable/comment-box/comment-box.component';
import { Person, Notification } from './../demo-page/demo-page.component';
import { Component, Input, OnInit } from '@angular/core';
import { TextAreaComponent } from 'src/app/reusable/text-area/text-area.component';
import { NovatekLogoComponent } from 'src/app/reusable/novatek-logo/novatek-logo.component';
import { MatTabHeaderPosition } from '@angular/material/tabs';
import { SearchComponent } from 'src/app/reusable/search/search.component';
import { PlaceHolderCard } from 'src/app/model/placeHolderCard';
import { PlaceHolderBanner } from 'src/app/model/placeHolderBanner';
import { PlaceholderBigCard } from 'src/app/model/PlaceholderBigCard';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  comments:Array<CommentNode> = [];
  position: MatTabHeaderPosition = 'below';
  types = [{component:TextAreaComponent, name:'TabOne'}, {component:NovatekLogoComponent, name:'TabTwo'}, {component:TextAreaComponent, name:'TabThree'}];
  invertedTypes = [{component:SearchComponent, name:'ITabOne'}, {component:NovatekLogoComponent, name:'ITabTwo'}, {component:TextAreaComponent, name:'ITabThree'}, {component:SearchComponent, name:'ITabFour'}];
  leftTypes = [{component:SearchComponent, name:'lTabOne'}, {component:NovatekLogoComponent, name:'lTabTwo'}, {component:TextAreaComponent, name:'lTabThree'}];
  rightTypes = [{component:NovatekLogoComponent, name:'RTabOne'}, {component:SearchComponent, name:'RTabTwo'}, {component:TextAreaComponent, name:'RTabThree'}, {component:SearchComponent, name:'RTabFour'}];
  progressiveColor: string = '#198515';
  progressiveStatus:string = '50%'; 
  // mockData for header
  @Input() person: Person = mockProfileMenu();
  avtar = '../../../../assets/images/avtar.jpg';
  cardData = {};
  bannerData = {};
  smallCardData = {};
  listData: any[] = [];
  constructor() {
   }

  ngOnInit(): void {
    this.comments =  [new CommentNode("Hello", "https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0")];
    this.setPlaceHolderCarddata();
    this.setPlaceHolderBannerdata();
    this.setPlaceHolder1();
    this.setListData();
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
      number: 20,
      content: '',
      hasAttachment: false,
    } as Notification,
  } as Person;
  return avatarProps;
}