import { Component, OnInit } from '@angular/core';
import { CommentNode } from 'src/app/reusable/comment-box/comment-box.component';
import { CommonHttpService } from 'src/app/services/common-http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  comments:Array<CommentNode> = [];

  constructor() {
   }

  ngOnInit(): void {
    this.comments =  [new CommentNode("Hello", "https://i.imgur.com/RpzrMR2.jpg")]
  }

}