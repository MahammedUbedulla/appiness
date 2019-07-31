import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  public getToken = localStorage.getItem('token');
  constructor(public router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.getToken){
        return true;
      }
      else{
        console.log('Wrong Authentication! Clear Cahce..Try Again')
        this.router.navigate(['/home/layout/login']);
        return false
      }
  }

}
