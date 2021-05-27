import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
 feedData = [{
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

}
