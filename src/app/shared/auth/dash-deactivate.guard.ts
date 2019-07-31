import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DashboardComponent } from 'src/app/login/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
 
export class DashDeactivateGuard implements CanDeactivate<DashboardComponent> {

  public localData = localStorage.getItem('token');

  canDeactivate(component: DashboardComponent) {
    if(this.localData){
      return false
    }
    return true
  }
}
