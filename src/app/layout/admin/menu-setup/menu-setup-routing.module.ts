import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuSetupComponent } from './menu-setup.component';

const routes: Routes = [
    {
        path: '',
        component: MenuSetupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuSetupRoutingModule {}
