import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { OutletService } from '../../../shared/services/outlet.service';
import { NgForm } from '@angular/forms';
import { MenuService } from '../../../shared/services/menu.service';
import { ToastrService } from 'ngx-toastr'
import { FoodService } from '../../../shared/services/food.service';

@Component({
  selector: 'app-menu-title',
  templateUrl: './outlet-menu-title.component.html',
  styleUrls: ['./outlet-menu-title.component.scss'],
  animations: [routerTransition()]
})
export class OutletMenuTitleComponent implements OnInit {

  outletMenuTitle: any = {};
  
  outlets: any;
  menuCategories: any;
  menuTitles: any;
  outletMenuTitles: any;
  //itemSizes: any;

  constructor(private outletService: OutletService, private menuService: MenuService, private foodService: FoodService, private toastr: ToastrService) {

    this.outletService.getOutlets()
      .subscribe((data) => {
        this.outlets = data;
      }, error => {
        console.log("getOutlets error");
      });

    this.menuService.getMenuCategories()
      .subscribe((data) => {
        this.menuCategories = data;
      }, error => {
        console.log("getMenuCategories error");
      });

    this.menuService.getMenuTitles()
      .subscribe((data) => {
        this.menuTitles = data;
      }, error => {
        console.log("getMenuTitles error");
      });

    this.menuService.getOutletMenuTitles()
      .subscribe((data) => {
        this.outletMenuTitles = data;
        console.log(this.outletMenuTitles);
      }, error => {
        console.log("getOutletMenuTitles error");
      });
      
    // this.foodService.getFoodItemSizes()
    //   .subscribe((data) => {
    //     this.itemSizes = data;
    //   }, error => {
    //     console.log("getFoodItemSizes error");
    //   });

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.menuService.postOutletMenuTitle(form.value)
    .subscribe(data => {
      if (data == 0) {
        console.log("Menu item submit successful!");
        this.toastr.success('New Menu Title created successfully', 'Success!');
      }
      else {
        this.toastr.error('ERROR!', 'Menu Title Register');
      }
    })
  }

  ngOnInit() {
  }

  checkboxClicked(id) {
    console.log(id);
  }

}
