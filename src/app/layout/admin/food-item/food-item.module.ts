import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { FoodItemRoutingModule } from './food-item-routing.module';
import { FoodItemComponent } from './food-item.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [CommonModule, FoodItemRoutingModule, PageHeaderModule, FormsModule],
    declarations: [FoodItemComponent]
})
export class FoodItemModule {}
