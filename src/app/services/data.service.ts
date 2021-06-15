import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import * as moment from "moment";
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
    constructor() {}

    getTableData(): Observable<any> {
        const data = [
            {
              id: 1,
              name: 'John Liiki',
              date: moment("12-25-1995", "MM-DD-YYYY"),
              email: 'john@yahoo.com',
              status: 'No'
            },
            {
              id: 2,
              name: 'Rock',
              date: moment("06-13-1999", "MM-DD-YYYY"),
              email: 'rock@gmail.com',
              status: 'Past Due'
            },
            {
              id: 3,
              name: 'Tom Cruise',
              date: moment("04-27-2001", "MM-DD-YYYY"),
              email: 'tomcruise@yahoo.com',
              status: 'Pending'
            },
            {
              id: 4,
              name: 'Sumit Gupta',
              date: moment("03-30-2005", "MM-DD-YYYY"),
              email: 'sumit@gmail.com',
              status: 'Completed'
            },
            {
              id: 5,
              name: 'Nicole Kidman',
              date: moment("02-22-2007", "MM-DD-YYYY"),
              email: 'nicole@redifmail.com',
              status: 'Yes'
            }
          ];
        return of(data);
     }
    }