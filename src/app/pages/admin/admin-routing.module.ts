import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AddProductComponent } from './Product/add-product/add-product.component';
// import { ProductListComponent } from './Product/product-list/product-list.component';
// import { LocationFormComponent } from './location-form/location-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: AdminPage,
    children: [
      { path: '', component: DashboardComponent }
    ]
  }
  // {
  //   path: 'product',
  //   component: AdminComponent,
  //   children: [
  //     { path: '', component: AddProductComponent },
  //     { path: 'list', component: ProductListComponent }
  //   ]
  // },
  // {
  //   path: 'location',
  //   component: LocationFormComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
