import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },

            { path: 'menu-title', loadChildren: './admin/outlet-menu-title/outlet-menu-title.module#OutletMenuTitleModule' }, 
            { path: 'food-item', loadChildren: './admin/food-item/food-item.module#FoodItemModule' },
            { path: 'menu-food-item', loadChildren: './admin/menu-food-item/menu-food-item.module#MenuFoodItemModule' },
            { path: 'day-food-menu', loadChildren: './admin/outlet-day-food-menu/outlet-day-food-menu.module#OutletDayFoodMenuModule' },
            { path: 'menu-setup', loadChildren: './admin/menu-setup/menu-setup.module#MenuSetupModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
