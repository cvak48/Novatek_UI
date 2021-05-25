import { CommentNode } from 'src/app/reusable/comment-box/comment-box.component';
import { CommonHttpService } from 'src/app/services/common-http.service';
import { Person, Notification } from './../demo-page/demo-page.component';
import { Component, Input, OnInit } from '@angular/core';
import { TextAreaComponent } from 'src/app/reusable/text-area/text-area.component';
import { NovatekLogoComponent } from 'src/app/reusable/novatek-logo/novatek-logo.component';
import { MatTabHeaderPosition } from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  comments:Array<CommentNode> = [];
  position: MatTabHeaderPosition = 'below';
  types = [{component:TextAreaComponent, name:'Tab 1'}, {component:NovatekLogoComponent, name:'Tab 2'}, {component:TextAreaComponent, name:'Tab 3'}];

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