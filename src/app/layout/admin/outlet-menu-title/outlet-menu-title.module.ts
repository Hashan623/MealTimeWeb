import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { OutletMenuTitleRoutingModule } from './outlet-menu-title-routing.module';
import { OutletMenuTitleComponent } from './outlet-menu-title.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [CommonModule, OutletMenuTitleRoutingModule, PageHeaderModule, FormsModule],
    declarations: [OutletMenuTitleComponent]
})
export class OutletMenuTitleModule {}
