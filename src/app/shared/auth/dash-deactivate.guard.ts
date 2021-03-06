import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { DashboardComponent } from 'src/app/login/dashboard/dashboard.component';
import { DataSharingService } from '../services/data-sharing.service';

@Injectable({
  providedIn: 'root'
})
 
export class DashDeactivateGuard implements CanDeactivate<DashboardComponent> {
  isLogin: any;

  constructor(public dataService: DataSharingService, public router: Router){
    this.dataService.asObservableData.subscribe((data) => this.isLogin = data.isLogin)
  }
  canDeactivate(component: DashboardComponent) {
    if(this.isLogin){
      this.router.navigate(['/dashboard']);
    }else{
      return true
    }
  }
}
