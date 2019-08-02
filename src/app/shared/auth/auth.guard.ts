import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { DataSharingService } from '../services/data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  isLogin: any;

  constructor(public dataService: DataSharingService, public router: Router){
    this.dataService.asObservableData.subscribe((data) => this.isLogin = data.isLogin)
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.isLogin)
      if(this.isLogin){
        this.dataService.toastr('Successfully Authenticate!')
        return true;
      }else{
        this.dataService.logout();
        this.dataService.toastr('Wrong Authentication! Clear Cache..Try Again')
        this.router.navigate(['/login']);
        return false;
      }
  }

}
