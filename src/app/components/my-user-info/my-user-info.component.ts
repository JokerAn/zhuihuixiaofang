import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';

@Component({
  selector: 'app-my-user-info',
  templateUrl: './my-user-info.component.html',
  styleUrls: ['./my-user-info.component.css']
})
export class MyUserInfoComponent implements OnInit {

  constructor(public anData:AnDataService) { }

  ngOnInit() {
    this.anData.footerShow(true);
    this.anData.headerShow(false);

  }

}
