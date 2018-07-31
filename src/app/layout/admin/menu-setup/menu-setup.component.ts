import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { NgForm } from '@angular/forms';
import { OutletService } from '../../../shared/services/outlet.service';
import { MenuService } from '../../../shared/services/menu.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu-setup',
  templateUrl: './menu-setup.component.html',
  styleUrls: ['./menu-setup.component.scss'],
  animations: [routerTransition()]
})
export class MenuSetupComponent implements OnInit {

  outletMenuSetup: any = {};

  outlets: any;
  menuTitles: any;

  constructor(private outletService: OutletService, private menuService: MenuService, private toastr: ToastrService) {
  }


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
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.menuService.postMenuSetup(form.value)
    .subscribe(data => {
      if (data == 0) {
        console.log("Menu Setup submit successful!");
        this.toastr.success('New Menu Setup created successfully', 'Success!');
      }
      else {
        this.toastr.error('ERROR!', 'Menu Title Register');
      }
    })
  }

}
