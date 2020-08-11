import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/services/http.service';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(public router: Router, public formBuilder: FormBuilder, public httpService: HttpService, public dataService: DataSharingService) { 
    this.loginForm = this.formBuilder.group({
      'USER_NAME': [null, Validators.compose([Validators.required])],
      'PASSWORD': [null, Validators.compose([Validators.required])],
    })
  }

  ngOnInit() {
   this.getUsersData();
  }

  // this is for to get all users
  getUsersData(){
    let action = 'https://api.github.com/users';
    this.httpService.getUsers(action).subscribe((data) => {
      this.dataService.setUsers(data);   
    })

    // this.httpService.getUsers().subscribe({
    //   next(data){
    //     this.dataService.setUsers(data); 
    //     console.log('Success!!', data)
    //   },
    //   error(error){
    //     console.log(error);
    //   },
    //   complete(){
    //     window.confirm('Succefully Done!')
    //   }
    // })
  }

  submit(){
    this.dataService.checkUser(this.loginForm.value);
  }
}
