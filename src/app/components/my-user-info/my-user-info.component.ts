import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';
import { EmmitAlertService } from 'src/app/services/emmit-alert.service';

@Component({
  selector: 'app-my-user-info',
  templateUrl: './my-user-info.component.html',
  styleUrls: ['./my-user-info.component.css']
})
export class MyUserInfoComponent implements OnInit {

  constructor(public anData: AnDataService, private emmitAlert: EmmitAlertService) { }

  ngOnInit() {
    this.anData.footerShow(true);
    this.anData.headerShow(false);
    this.emmitAlert.send({ id: 'footerChange', data: 'wode' });
  }

}
