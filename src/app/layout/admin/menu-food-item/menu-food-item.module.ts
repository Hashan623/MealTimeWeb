import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MenuFoodItemRoutingModule } from './menu-food-item-routing.module';
import { MenuFoodItemComponent } from './menu-food-item.component';
import { PageHeaderModule } from '../../../shared';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [CommonModule, MenuFoodItemRoutingModule, PageHeaderModule, FormsModule, NgSelectModule],
    declarations: [MenuFoodItemComponent]
})
export class MenuFoodItemModule {}
