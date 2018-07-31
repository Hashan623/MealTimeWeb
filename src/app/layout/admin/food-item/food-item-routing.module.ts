import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodItemComponent } from './food-item.component';

const routes: Routes = [
    {
        path: '',
        component: FoodItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FoodItemRoutingModule {}
