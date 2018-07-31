import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { NgForm } from '@angular/forms';
import { OutletService } from '../../../shared/services/outlet.service';
import { FoodService } from '../../../shared/services/food.service';
import { MenuService } from '../../../shared/services/menu.service';

@Component({
    selector: 'app-day-food-menu',
    templateUrl: './outlet-day-food-menu.component.html',
    styleUrls: ['./outlet-day-food-menu.component.scss'],
    animations: [routerTransition()]
})
export class OutletDayFoodMenuComponent implements OnInit {

    dayFoodMenuItem: any = {};

    outlets: any;
    menuTitles: any;
    menuCategories: any;

    constructor(private menuService: MenuService, private foodService: FoodService, private outletService: OutletService) { }

    ngOnInit() {
        this.outletService.getOutlets()
            .subscribe((data) => {
                this.outlets = data;
            }, error => {
                console.log("getOutlets error");
            });

        this.menuService.getOutletMenuTitles()
            .subscribe((data) => {
                this.menuTitles = data;
            }, error => {
                console.log("getMenuTitles error");
            });

        this.menuService.getMenuCategories()
            .subscribe((data) => {
                this.menuCategories = data;
            }, error => {
                console.log("getMenuCategories error");
            });
    }

    onSubmit() {
        console.log(this.dayFoodMenuItem);
    }

}