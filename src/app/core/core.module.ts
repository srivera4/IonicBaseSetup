import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuardService } from './service/auth-guard.service';

@NgModule({
  declarations: [LoginComponent, NotFoundComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [
    RouterModule,    
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,   
  ]
})
export class CoreModule { }
