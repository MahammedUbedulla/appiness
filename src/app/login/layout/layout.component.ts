import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public dataService: DataSharingService) { }

  ngOnInit() {
  }

  logout(){
    this.dataService.logout();
  }

}
