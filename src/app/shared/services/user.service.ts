import { Globals } from '../globals';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //http://192.168.1.75/MealTimeService/api/MealTimeUser/Register
  //http://localhost:3909/api/MealTime/GetApplicationMenus?userID=0
  //http://192.168.1.75/MealTimeService/api/MealTime/GetApplicationMenus?userID=0
  constructor(private http: Http, private globals: Globals) { }

  postUser(user: User) {
    var body = JSON.stringify(user);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.globals.baseUrl + 'Outlet/RegisterOutlet', body, requestOptions)
      .map(x => x.json());
  }

  // getMenu() {
  //   this.http.get('http://localhost:3909/api/MealTime/GetApplicationMenus?userID=0')
  //     .map((data: Response) => {
  //       return data.json() as Menu[];
  //     }).toPromise().then(x => {
  //       this.menuList = x;
  //     })
  // }

  getMenu(): Observable<any>{
    return this.http.get('http://192.168.1.75/MealTimeService/api/MealTime/GetApplicationMenus?userID=0')
      .map((menus: Response) => menus.json())
  }

  getSubMenus(): Observable<any>{
    return this.http.get('http://192.168.1.75/MealTimeService/api/MealTime/GetApplicationMenus?userID=0')
      .map((submenus: Response) => submenus.json())
  }

}
