import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { OutletDayFoodMenuRoutingModule } from './outlet-day-food-menu-routing.module';
import { OutletDayFoodMenuComponent } from './outlet-day-food-menu.component';
import { PageHeaderModule } from '../../../shared';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [CommonModule, OutletDayFoodMenuRoutingModule, PageHeaderModule, FormsModule, NgSelectModule],
    declarations: [OutletDayFoodMenuComponent]
})
export class OutletDayFoodMenuModule {}
