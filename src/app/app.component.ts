import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from './shared/services/data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login';
  constructor(public router: Router, public dataService: DataSharingService){
    this.dataService.logout();
  }
  ngOnInit(){
    this.router.navigateByUrl('/login');
    
  }
}
