import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/model/feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  commentText: any;
  imageURL = 'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0';
  feedData: Feed[] = [{
          'authorName': 'User1',
          'authorLink': '',
          'action': 'added you as friend',
          'message': '',
          'attachments': [],
          'likes': 40
        },
        {
          'authorName': 'User2',
          'authorLink': '',
          'action': 'posted on page',
          'message': 'Someone added you as a friend Someone added you as a friend Someone added you as a friend Someone added you as a friendSomeone added you as a friend Someone added you as a friend Someone added you as a friendSomeone added you as a friendSomeone added you as a friend Someone added you as a friend',
          'attachments': [],
          'likes': 40
        },
        {
          'authorName': 'User3',
          'authorLink': '',
          'action': 'added attachments',
          'message': '',
          'attachments': [
            {
              'url':'http://dwglogo.com/wp-content/uploads/2016/06/1700px_Novartis_logo.png'
            },
            {
              'url':'http://dwglogo.com/wp-content/uploads/2016/06/1700px_Novartis_logo.png'
            }
          ],
          'likes': 40
        }]
  constructor() { }

  ngOnInit(): void {
  }

  addComment():void{
    if (this.commentText) {
      const commentObj: Feed = {
        'authorName': 'User5',
        'authorLink': '',
        'action': 'posted on page',
        'message': this.commentText,
        'attachments': [],
        'likes': 0
      }
      this.feedData.push(commentObj);
      this.commentText ='';
    }
    
  }

}
