import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './interceptors/login-interceptor';
import { DataSharingService } from './services/data-sharing.service';
import { DashDeactivateGuard } from './auth/dash-deactivate.guard';
import { AuthGuard } from './auth/auth.guard';
import { LogoutGuard } from './auth/logout.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HttpService, DataSharingService, DashDeactivateGuard, LogoutGuard,
    { provide: AuthGuard, useClass: AuthGuard },
    {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true}
  ]
})
export class SharedModule { }
