import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import * as moment from "moment";
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
    constructor() {}
    getData(): Observable<any> {
      const data = [  
        {
          'id': 1,
          'name': 'Veera',
          'status': 'Pending',
          'checked': false,
          'isUpdated': false
        },
        {
          'id': 2,
          'name': 'Sina',
          'status': 'Pending',
          'checked': false,
          'isUpdated': false
        },
        {
          'id': 3,
          'name': 'Amir',
          'status': 'Pending',
          'checked': false,
          'isUpdated': false
        },
        {
          'id': 4,
          'name': 'Payam',
          'status': 'Pending',
          'checked': false,
          'isUpdated': false
        },
        {
          'id': 5,
          'name': 'Dhaval',
          'status': 'Pending',
          'checked': false,
          'isUpdated': false
        },  
        {
          'id': 6,
          'name': 'Very very very very long long name ',
          'status': 'Pending',
          'checked': false,
          'isUpdated': false
        }      
      ]
        return of(data);
      }
    
    getTableData(): Observable<any> {
        const data = [  {
          'id': 0,
          'name': 'ame',
          'date': "12-25-1995",
          'email': 'john@yahoo.com',
          'status': 'No',
          'checked': false,
          'attachments': [{
            'id': '1',
            'name': 'file1'
          }]
        },
          {
            'id': 1,
            'name': 'John Liiki',
            'date': "12-25-1995",
            'email': 'john@yahoo.com',
            'status': 'No',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            }]
          },
          {
            'id': 2,
            'name': 'Rock',
            'date': "06-13-1999",
            'email': 'rock@gmail.com',
            'status': 'Past Due',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 3,
            'name': 'Tom Cruis2',
            'date': "04-27-2001",
            'email': 'tomcruise@yahoo.com',
            'status': 'Pending',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
           ]
          },
          {
            'id': 4,
            'name': 'Sumit Gupta',
            'date': "03-30-2005",
            'email': 'sumit@gmail.com',
            'status': 'Completed',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 5,
            'name': 'Nicole Kidman',
            'date': "02-22-2007",
            'email': 'nicole@redifmail.com',
            'status': 'Yes',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 1,
            'name': 'John Liiki',
            'date': "12-25-1995",
            'email': 'john@yahoo.com',
            'status': 'No',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            }]
          },
          {
            'id': 2,
            'name': 'Rock',
            'date': "06-13-1999",
            'email': 'rock@gmail.com',
            'status': 'Past Due',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 3,
            'name': 'Tom Cruise',
            'date': "04-27-2001",
            'email': 'tomcruise@yahoo.com',
            'status': 'Pending',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
           ]
          },
          {
            'id': 4,
            'name': 'Sumit Gupta',
            'date': "03-30-2005",
            'email': 'sumit@gmail.com',
            'status': 'Completed',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 5,
            'name': 'Nicole Kidman',
            'date': "02-22-2007",
            'email': 'nicole@redifmail.com',
            'status': 'Yes',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 1,
            'name': 'John Liiki',
            'date': "12-25-1995",
            'email': 'john@yahoo.com',
            'status': 'No',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            }]
          },
          {
            'id': 2,
            'name': 'Rock',
            'date': "06-13-1999",
            'email': 'rock@gmail.com',
            'status': 'Past Due',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 3,
            'name': 'Tom Cruise3',
            'date': "04-27-2001",
            'email': 'tomcruise@yahoo.com',
            'status': 'Pending',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
           ]
          },
          {
            'id': 4,
            'name': 'Sumit Gupta',
            'date': "03-30-2005",
            'email': 'sumit@gmail.com',
            'status': 'Completed',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 5,
            'name': 'Nicole Kidman',
            'date': "02-22-2007",
            'email': 'nicole@redifmail.com',
            'status': 'Yes',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 1,
            'name': 'John Liiki',
            'date': "12-25-1995",
            'email': 'john@yahoo.com',
            'status': 'No',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            }]
          },
          {
            'id': 2,
            'name': 'Rock',
            'date': "06-13-1999",
            'email': 'rock@gmail.com',
            'status': 'Past Due',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 3,
            'name': 'Tom Cruise4',
            'date': "04-27-2001",
            'email': 'tomcruise@yahoo.com',
            'status': 'Pending',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
           ]
          },
          {
            'id': 4,
            'name': 'Sumit Gupta',
            'date': "03-30-2005",
            'email': 'sumit@gmail.com',
            'status': 'Completed',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 5,
            'name': 'Nicole Kidman',
            'date': "02-22-2007",
            'email': 'nicole@redifmail.com',
            'status': 'Yes',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 1,
            'name': 'John Liiki',
            'date': "12-25-1995",
            'email': 'john@yahoo.com',
            'status': 'No',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            }]
          },
          {
            'id': 2,
            'name': 'Rock',
            'date': "06-13-1999",
            'email': 'rock@gmail.com',
            'status': 'Past Due',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 3,
            'name': 'Tom Cruise5',
            'date': "04-27-2001",
            'email': 'tomcruise@yahoo.com',
            'status': 'Pending',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
           ]
          },
          {
            'id': 4,
            'name': 'Sumit Gupta',
            'date': "03-30-2005",
            'email': 'sumit@gmail.com',
            'status': 'Completed',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 5,
            'name': 'Nicole Kidman',
            'date': "02-22-2007",
            'email': 'nicole@redifmail.com',
            'status': 'Yes',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 1,
            'name': 'John Liiki',
            'date': "12-25-1995",
            'email': 'john@yahoo.com',
            'status': 'No',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            }]
          },
          {
            'id': 2,
            'name': 'Rock',
            'date': "06-13-1999",
            'email': 'rock@gmail.com',
            'status': 'Past Due',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 3,
            'name': 'Tom Cruise6',
            'date': "04-27-2001",
            'email': 'tomcruise@yahoo.com',
            'status': 'Pending',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
           ]
          },
          {
            'id': 4,
            'name': 'Sumit Gupta',
            'date': "03-30-2005",
            'email': 'sumit@gmail.com',
            'status': 'Completed',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 5,
            'name': 'Nicole Kidman',
            'date': "02-22-2007",
            'email': 'nicole@redifmail.com',
            'status': 'Yes',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 1,
            'name': 'John Liiki',
            'date': "12-25-1995",
            'email': 'john@yahoo.com',
            'status': 'No',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            }]
          },
          {
            'id': 2,
            'name': 'Rock',
            'date': "06-13-1999",
            'email': 'rock@gmail.com',
            'status': 'Past Due',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 3,
            'name': 'Tom Cruise7',
            'date': "04-27-2001",
            'email': 'tomcruise@yahoo.com',
            'status': 'Pending',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
           ]
          },
          {
            'id': 4,
            'name': 'Sumit Gupta',
            'date': "03-30-2005",
            'email': 'sumit@gmail.com',
            'status': 'Completed',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 5,
            'name': 'Nicole Kidman',
            'date': "02-22-2007",
            'email': 'nicole@redifmail.com',
            'status': 'Yes',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 1,
            'name': 'John Liiki',
            'date': "12-25-1995",
            'email': 'john@yahoo.com',
            'status': 'No',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            }]
          },
          {
            'id': 2,
            'name': 'Rock',
            'date': "06-13-1999",
            'email': 'rock@gmail.com',
            'status': 'Past Due',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 3,
            'name': 'Tom Cruise8',
            'date': "04-27-2001",
            'email': 'tomcruise@yahoo.com',
            'status': 'Pending',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
           ]
          },
          {
            'id': 4,
            'name': 'Sumit Gupta',
            'date': "03-30-2005",
            'email': 'sumit@gmail.com',
            'status': 'Completed',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 5,
            'name': 'Nicole Kidman',
            'date': "02-22-2007",
            'email': 'nicole@redifmail.com',
            'status': 'Yes',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 1,
            'name': 'John Liiki',
            'date': "12-25-1995",
            'email': 'john@yahoo.com',
            'status': 'No',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            }]
          },
          {
            'id': 2,
            'name': 'Rock',
            'date': "06-13-1999",
            'email': 'rock@gmail.com',
            'status': 'Past Due',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 3,
            'name': 'Tom Cruise9',
            'date': "04-27-2001",
            'email': 'tomcruise@yahoo.com',
            'status': 'Pending',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
           ]
          },
          {
            'id': 4,
            'name': 'Sumit Gupta',
            'date': "03-30-2005",
            'email': 'sumit@gmail.com',
            'status': 'Completed',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 5,
            'name': 'Nicole Kidman',
            'date': "02-22-2007",
            'email': 'nicole@redifmail.com',
            'status': 'Yes',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 1,
            'name': 'John Liiki',
            'date': "12-25-1995",
            'email': 'john@yahoo.com',
            'status': 'No',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            }]
          },
          {
            'id': 2,
            'name': 'Rock',
            'date': "06-13-1999",
            'email': 'rock@gmail.com',
            'status': 'Past Due',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 3,
            'name': 'Tom Cruise10',
            'date': "04-27-2001",
            'email': 'tomcruise@yahoo.com',
            'status': 'Pending',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
           ]
          },
          {
            'id': 4,
            'name': 'Sumit Gupta',
            'date': "03-30-2005",
            'email': 'sumit@gmail.com',
            'status': 'Completed',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          },
          {
            'id': 5,
            'name': 'Nicole Kidman',
            'date': "02-22-2007",
            'email': 'nicole@redifmail.com',
            'status': 'Yes',
            'checked': false,
            'attachments': [{
              'id': '1',
              'name': 'file1'
            },
            {
              'id': '2',
              'name': 'file2'
            }]
          }
        ];
        return of(data);
     }
    }