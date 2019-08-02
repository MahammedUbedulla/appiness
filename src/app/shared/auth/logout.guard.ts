import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataSharingService } from '../services/data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
  isLogin: any;

  constructor(public dataService: DataSharingService, public router: Router){
    this.dataService.asObservableData.subscribe((data) => this.isLogin = data.isLogin)
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.isLogin){
      this.router.navigate(['/dashboard'])
    }else{
      return true
    }
  }
}
