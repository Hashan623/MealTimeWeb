import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MenuSetupRoutingModule } from './menu-setup-routing.module';
import { MenuSetupComponent } from './menu-setup.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [CommonModule, MenuSetupRoutingModule, PageHeaderModule, FormsModule],
    declarations: [MenuSetupComponent]
})
export class MenuSetupModule {}
