import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { DashDeactivateGuard } from '../shared/auth/dash-deactivate.guard';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'},
  { path:'login', component: SignInComponent},
  { path:'dashboard', component: LayoutComponent, canActivate: [AuthGuard], canDeactivate: [DashDeactivateGuard]  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
