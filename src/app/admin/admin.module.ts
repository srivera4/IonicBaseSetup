import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, AdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    IonicModule
  ]
})
export class AdminModule { }
