import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ReposComponent } from './repos/repos.component';
import { SerachPipePipe } from '../shared/pipes/serach-pipe.pipe';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule, FormsModule, MatBottomSheetModule, 
    // BrowserAnimationsModule
  ],
  declarations: [SignInComponent, DashboardComponent, LayoutComponent, ReposComponent, SerachPipePipe],
  entryComponents: [ReposComponent]
})
export class LoginModule { }
