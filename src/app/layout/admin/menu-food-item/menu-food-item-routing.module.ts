import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuFoodItemComponent } from './menu-food-item.component';

const routes: Routes = [
    {
        path: '',
        component: MenuFoodItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuFoodItemRoutingModule {}
