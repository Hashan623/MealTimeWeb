import { Globals } from '../globals';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class OutletService {

  constructor(private http: Http, private globals: Globals) { }

  getOutlets(): Observable<any>{
    return this.http.get(this.globals.baseUrl + 'Outlet/GetOutlets?outletTypeID=0')
      .map((outlets: Response) => outlets.json())
  }

//   postUser(user: User) {
//     var body = JSON.stringify(user);
//     var headerOptions = new Headers({ 'Content-Type': 'application/json' });
//     var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
//     return this.http.post('http://localhost:3909/api/MealTimeUser/Register', body, requestOptions)
//       .map(x => x.json());
//   }

}
