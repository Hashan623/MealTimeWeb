import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutletDayFoodMenuComponent } from './outlet-day-food-menu.component';

const routes: Routes = [
    {
        path: '',
        component: OutletDayFoodMenuComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OutletDayFoodMenuRoutingModule {}
