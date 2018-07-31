import { Globals } from '../globals';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { MenuTitle } from '../../models/menu-title';
import { MenuSetup } from '../../models/menu-setup';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: Http, private globals: Globals) { }

  getMenuTitles(): Observable<any>{
    return this.http.get(this.globals.baseUrl + '/Menu/GetMenuTitles')
      .map((menuTitles: Response) => menuTitles.json())
  }

  getMenuCategories(): Observable<any>{
    return this.http.get(this.globals.baseUrl + '/Menu/GetMenuCategories')
      .map((categories: Response) => categories.json())
  }

  getOutletMenuTitles(): Observable<any>{
    return this.http.get(this.globals.baseUrl + '/Menu/GetMenusForOutlet?outletID=1')
      .map((menuTitles: Response) => menuTitles.json())
  }

  postOutletMenuTitle (menuItem: MenuTitle) {
    var body = JSON.stringify(menuItem);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.globals.baseUrl + '/Menu/RegisterOutletMenuTitle', body, requestOptions)
      .map(x => x.json());
  }

  postMenuSetup (menuSetup: MenuSetup) {
    var body = JSON.stringify(menuSetup);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.globals.baseUrl + '/Menu/RegisterOutletMenuSetup', body, requestOptions)
      .map(x => x.json());
  }

}
