import { CommentNode } from 'src/app/reusable/comment-box/comment-box.component';
import { CommonHttpService } from 'src/app/services/common-http.service';
import { Person, Notification } from './../demo-page/demo-page.component';
import { Component, Input, OnInit } from '@angular/core';
import { TextAreaComponent } from 'src/app/reusable/text-area/text-area.component';
import { NovatekLogoComponent } from 'src/app/reusable/novatek-logo/novatek-logo.component';
import { MatTabHeaderPosition } from '@angular/material/tabs';
import { SearchComponent } from 'src/app/reusable/search/search.component';

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

  // mockData for header
  @Input() person: Person = mockProfileMenu();
  constructor() {
   }

  ngOnInit(): void {
    this.comments =  [new CommentNode("Hello", "https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0")]
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