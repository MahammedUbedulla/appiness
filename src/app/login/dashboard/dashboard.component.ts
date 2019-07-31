import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usersData: any;

  constructor(public dataService: DataSharingService) { }

  ngOnInit() {
    this.dataService.asObservableData.subscribe((data) => this.usersData = data.users)
    console.log(this.usersData)
  }

}
