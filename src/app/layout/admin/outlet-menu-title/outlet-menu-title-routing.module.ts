import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutletMenuTitleComponent } from './outlet-menu-title.component';

const routes: Routes = [
    {
        path: '',
        component: OutletMenuTitleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OutletMenuTitleRoutingModule {}
