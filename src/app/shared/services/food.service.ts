import { FoodItem } from '../../models/food-item';
import { Globals } from '../globals';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: Http, private globals: Globals) { }

  getFoodItems(): Observable<any> {
    return this.http.get(this.globals.baseUrl + 'Menu/GetFoodItems?FoodCategoryID=0')
      .map((foodItems: Response) => foodItems.json())
  }

  getFoodItemTypes(): Observable<any> {
    return this.http.get(this.globals.baseUrl + 'Menu/GetFoodItemType')
      .map((foodItemTypes: Response) => foodItemTypes.json())
  }

  getFoodItemSizes(): Observable<any> {
    return this.http.get(this.globals.baseUrl + 'Menu/GetFoodItemSize')
      .map((foodItemSizes: Response) => foodItemSizes.json())
  }

  getFoodItemCategories(): Observable<any> {
    return this.http.get(this.globals.baseUrl + 'Menu/GetFoodItemCategories')
      .map((foodItemCategories: Response) => foodItemCategories.json())
  }

  postOutletFoodItem (foodItem: FoodItem) {
    var body = JSON.stringify(foodItem);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.globals.baseUrl + 'outlet/RegisterOutletFoodItems', body, requestOptions)
      .map(x => x.json());
  }

}
