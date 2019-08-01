import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { DataSharingService } from '../services/data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  public getToken = localStorage.getItem('token');
  

  constructor(public router: Router, public dataService: DataSharingService){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.getToken)
      if(this.getToken){
        this.dataService.toastr('Successfully Authenticate!')
        return true;
      }else{
        this.dataService.logout();
        this.dataService.toastr('Wrong Authentication! Clear Cahce..Try Again')
        this.router.navigate(['/login']);
        return false
      }
  }

}
