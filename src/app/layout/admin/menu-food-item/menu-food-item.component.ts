import { FoodService } from '../../../shared/services/food.service';
import { OutletService } from '../../../shared/services/outlet.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { NgForm } from '@angular/forms';
import { MenuService } from '../../../shared/services/menu.service';

@Component({
    selector: 'app-menu-food-item',
    templateUrl: './menu-food-item.component.html',
    styleUrls: ['./menu-food-item.component.scss'],
    animations: [routerTransition()]
})
export class MenuFoodItemComponent implements OnInit {

    outletMenuFoodItem: any = {};

    outlets: any;
    menuTitles: any;
    foodItems: any;

    constructor(private outletService: OutletService, private foodService: FoodService, private menuService: MenuService) {

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
                console.log(data);
            }, error => {
                console.log("getFoodItems error");
            });
    }

    onSubmit() {
        console.log(this.outletMenuFoodItem);
    }


}