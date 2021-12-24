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
          'status': 0,
          'checked': false,
          'tempStatus': 0
        },
        {
          'id': 2,
          'name': 'Sina',
          'status': 0,
          'checked': false,
          'tempStatus': 0
        },
        {
          'id': 3,
          'name': 'Amir',
          'status': 0,
          'checked': false,
          'tempStatus': 0
        },
        {
          'id': 4,
          'name': 'Payam',
          'status': 0,
          'checked': false,
          'tempStatus': 0
        },
        {
          'id': 5,
          'name': 'Dhaval',
          'status': 0,
          'checked': false,
          'tempStatus': 0
        },  
        {
          'id': 6,
          'name': 'Very very very very long long name ',
          'status': 0,
          'checked': false,
          'tempStatus': 0
        },
        {
          'id': 9,
          'name': 'John',
          'status': 0,
          'checked': false,
          'tempStatus': 0
        },
        {
          'id': 6,
          'name': 'Hommi ',
          'status': 0,
          'checked': false,
          'tempStatus': 0 
        }, 
        {
          'id': 11,
          'name': 'hello',
          'status': 0,
          'checked': false,
          'tempStatus': 0 
        },    
      ]
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
            'multiStatus': ['Test Status 1', 'Test Status2'],
            'checked': false,
            'title': 'Lead1',
            'position': 'Tech Lead1',
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
            'title': 'Lead2',
            'position': 'Tech Lead2',
            'multiPosition':['Test Position 1', 'Test Position 2'],
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
            'title': 'Lead3',
            'position': 'Tech Lead3',
            'multiStatus': ['Test Status 1', 'Test Status2'],
            'multiPosition':['Test Position 1', 'Test Position 2'],
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
            'title': 'Lead4',
            'position': 'Tech Lead4',
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
            'title': 'Lead5',
            'position': 'Tech Lead5',
            'multiStatus': ['Test Status 1', 'Test Status2'],
            'multiPosition':['Test Position 1', 'Test Position 2'],
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
            'title': 'Lead6',
            'position': 'Tech Lead6',
            'multiStatus': ['Test Status 1', 'Test Status2'],
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
            'title': 'Lead7',
            'position': 'Tech Lead7',
            'multiPosition':['Test Position 1', 'Test Position 2'],
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
            'title': 'Lead8',
            'position': 'Tech Lead8',
            'multiStatus': ['Test Status 1', 'Test Status2'],
            'multiPosition':['Test Position 1', 'Test Position 2'],
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
            'title': 'Lead9',
            'position': 'Tech Lead9',
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
            'title': 'Lead10',
            'position': 'Tech Lead10',
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
            'title': 'Lead11',
            'position': 'Tech Lead11',
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
            'title': 'Lead12',
            'position': 'Tech Lead12',
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
            'title': 'Lead13',
            'position': 'Tech Lead13',
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
            'title': 'Lead14',
            'position': 'Tech Lead14',
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
            'title': 'Lead15',
            'position': 'Tech Lead15',
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
            'title': 'Lead16',
            'position': 'Tech Lead16',
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
            'title': 'Lead17',
            'position': 'Tech Lead17',
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
            'title': 'Lead18',
            'position': 'Tech Lead18',
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
            'title': 'Lead19',
            'position': 'Tech Lead19',
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
            'title': 'Lead20',
            'position': 'Tech Lead20',
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
          'firstname': 'John',
          'LatsName' : 'Likki',
          'userName': "John-Liiki",
          'passwordExpiry': '12-25-2025',
          'accountExpiry': '12-25-2025',
          'lastLogin': '09-25-2021',
          'position': 'Team Lead',
          'title': 'Lead1',
          'email': 'john@yahoo.com'
        },
        {
          'id': 2,
          'name': 'Rock',
          'userName': "Rock",
          'passwordExpiry': '12-25-2025',
          'accountExpiry': '12-25-2025',
          'lastLogin': '09-25-2021',
          'position': 'QA Lead',
          'title': 'Lead2',
          'email': 'rock@gmail.com'
        },
      {
        'id': 3,
        'name': 'Tom Cruis2',
        'userName': "Tom-Cruis2",
        'passwordExpiry': '12-25-2023',
        'accountExpiry': '12-25-2024',
        'lastLogin': '09-25-2021',
        'position': 'Manager',
        'title': 'Lead3',
        'email': 'tomcruise@yahoo.com'
      },
      {
        'id': 4,
        'name': 'Sumit Gupta',
        'userName': "Sumit-Gupta",
        'passwordExpiry': '12-25-2022',
        'accountExpiry': '12-25-2023',
        'lastLogin': '09-25-2020',
        'position': 'Developer',
        'title': 'Lead4',
        'email': 'sumit@gmail.com',
      },
      {
        'id': 5,
        'name': 'Nicole Kidman',
        'userName': "Nicole-Kidman",
        'passwordExpiry': '12-25-2022',
        'accountExpiry': '12-25-2023',
        'lastLogin': '09-25-2020',
        'position': 'Tester',
        'title': 'Lead5',
        'email': 'nicole@redifmail.com'
      }

      ];

      const user = data.filter(ele => {
        return ele.id == id;
      });
      return user;
        //return of(data);
      }
    }