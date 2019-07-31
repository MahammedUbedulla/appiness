import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  public DefaultData: any = {}

  public SubjectData = new BehaviorSubject(this.DefaultData);
  public asObservableData = this.SubjectData.asObservable();
  
  constructor(public router: Router) {}

  setUsers(users){
    this.DefaultData.users = users;
    this.SubjectData.next(this.DefaultData);
  }

  logout(){
    localStorage.removeItem('token');
  }

  checkUser(user){
    console.log(this.DefaultData)
    this.DefaultData.users.forEach(ele => {
      if(ele.login == user.USER_NAME){
        localStorage.setItem('token', JSON.stringify(user));
        console.log('Working Fine!!!')
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

}
