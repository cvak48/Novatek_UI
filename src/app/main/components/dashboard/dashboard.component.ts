import { CommentNode } from 'src/app/reusable/comment-box/comment-box.component';
import { CommonHttpService } from 'src/app/services/common-http.service';
import { Person, Notification } from './../demo-page/demo-page.component';
import { Component, Input, OnInit } from '@angular/core';
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

  // mockData for header
  @Input() person: Person = mockProfileMenu();
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
    this.cardData = {'img':'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
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
    this.smallCardData = {'img':'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
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
    this.bannerData = {'img':'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
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