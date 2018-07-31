import { OutletService } from '../../../shared/services/outlet.service';
import { FoodService } from '../../../shared/services/food.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { NgForm } from '@angular/forms';
import { MenuService } from '../../../shared/services/menu.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-food-item',
    templateUrl: './food-item.component.html',
    styleUrls: ['./food-item.component.scss'],
    animations: [routerTransition()]
})
export class FoodItemComponent implements OnInit {

    outletFoodItem: any = {};

    outlets: any;

    foodItems: any;
    menuTitles: any;
    foodItemTypes: any;
    foodItemSizes: any;
    foodItemCategories: any;

    filtered: any;

    constructor(private foodService: FoodService, private outletService: OutletService, private menuService: MenuService, private toastr: ToastrService) {

    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        this.foodService.postOutletFoodItem(form.value)
        .subscribe(data => {
          if (data == 0) {
            console.log("Food item submit successful!");
            this.toastr.success('New Food Item created successfully', 'Success!');
          }
          else {
            this.toastr.error('ERROR!', 'Menu Title Register');
          }
        })
      }

    ngOnInit() {
        this.outletService.getOutlets()
            .subscribe((data) => {
                this.outlets = data;
            }, error => {
                console.log("getOutlets error");
            });

            this.menuService.getMenuTitles()
            .subscribe((data) => {
                this.menuTitles = data;
            }, error => {
                console.log("getMenuTitles error");
            });

        this.foodService.getFoodItems()
            .subscribe((data) => {
                this.foodItems = data;
                //this.foodItems = this.foodItems1;
            }, error => {
                console.log("getFoodItems error");
            });

        this.foodService.getFoodItemTypes()
            .subscribe((data) => {
                this.foodItemTypes = data;
            }, error => {
                console.log("getFoodItemTypes error");
            });

        this.foodService.getFoodItemCategories()
            .subscribe((data) => {
                this.foodItemCategories = data;
            }, error => {
                console.log("getFoodItemCategories error");
            });

        this.foodService.getFoodItemSizes()
            .subscribe((data) => {
                this.foodItemSizes = data;
            }, error => {
                console.log("getFoodItemSizes error");
            });
    }

    checkboxClicked(id) {
        console.log(id);
    }

    onChange(event) {
        console.log(event);
        // this.filtered = this.foodItems1.filter(t=>t.value ==event);
        // console.log("filtered =" + this.filtered);
       // return this.foodItems.filter(filteredFood => filteredFood.userStamp === event);
    }

}
