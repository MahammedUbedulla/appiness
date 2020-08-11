import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { ReposComponent } from '../repos/repos.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usersData: any;
  public loading: Boolean = false;
  constructor(public dataService: DataSharingService, public httpService: HttpService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.dataService.asObservableData.subscribe((data) => this.usersData = data.users)
    console.log(this.usersData)
  }

  // it will for users get if we want to put Refresh button in dashboard, as of now i am not calling
  callUsersApi(){
    let action = 'https://api.github.com/users';
    this.httpService.getUsers(action).subscribe((data) => {
      this.dataService.setUsers(data);   
    })
  }

  openRepos(user){
    this.loading = true
    let action = 'https://api.github.com/users/' + user +'/repos';
    this.httpService.getUsers(action).subscribe(
      (data) => {
        this.loading = false;
        this.dataService.toastr(user + ' repos got successfully')
        this.openBottomSheet(data)
    })
  }

  openBottomSheet(repos): void {
    this._bottomSheet.open(ReposComponent, {
      data: repos,
    });
  }

}
