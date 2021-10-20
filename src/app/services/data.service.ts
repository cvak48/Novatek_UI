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
          'name': 'Sina',
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
        }]
        return of(data);
      }
    
    getTableData(): Observable<any> {
        const data = [ 
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

     getUserData(id: number): any {
      const data = [  
        {
          'id': 1,
          'name': 'John Liiki',
          'userName': "John-Liiki",
          'passwordExpiry': '12-25-2025',
          'accountExpiry': '12-25-2025',
          'lastLogin': '09-25-2021',
          'jobPosition': 'Team Lead'
        },
        {
          'id': 2,
          'name': 'Rock',
          'userName': "Rock",
          'passwordExpiry': '12-25-2025',
          'accountExpiry': '12-25-2025',
          'lastLogin': '09-25-2021',
          'jobPosition': 'QA Lead'
        },
      {
        'id': 3,
        'name': 'Tom Cruis2',
        'userName': "Tom-Cruis2",
        'passwordExpiry': '12-25-2023',
        'accountExpiry': '12-25-2024',
        'lastLogin': '09-25-2021',
        'jobPosition': 'Manager'
      },
      {
        'id': 4,
        'name': 'Sumit Gupta',
        'userName': "Sumit-Gupta",
        'passwordExpiry': '12-25-2022',
        'accountExpiry': '12-25-2023',
        'lastLogin': '09-25-2020',
        'jobPosition': 'Developer'
      },
      {
        'id': 5,
        'name': 'Nicole Kidman',
        'userName': "Nicole-Kidman",
        'passwordExpiry': '12-25-2022',
        'accountExpiry': '12-25-2023',
        'lastLogin': '09-25-2020',
        'jobPosition': 'Tester'
      }

      ];

      const user = data.filter(ele => {
        return ele.id == id;
      });
      return user;
        //return of(data);
      }
    }