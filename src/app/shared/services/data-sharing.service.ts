import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

declare var toastr: any;
declare var M: any

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
        this.toastr('Successfully LogedIn!')
        this.router.navigateByUrl('/dashboard');
      }
    });
    this.toastr('User is not Available in data. Please enter valid user!')
  }

  toastr(text){
    let messageBody = '<div class="success_toastr"><span>' + text + '</span>&nbsp;&nbsp;&nbsp; <span><i class="fa fa-times-circle-o" aria-hidden="true"></i></span></div>';
     M.toast({html: messageBody});
  }

}
