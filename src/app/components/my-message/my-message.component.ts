import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';
import { EmmitAlertService } from 'src/app/services/emmit-alert.service';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.css']
})
export class MyMessageComponent implements OnInit {

  constructor(private anData: AnDataService, private emmitAlert: EmmitAlertService) { }

  ngOnInit() {
    this.anData.footerShow(true);
    this.anData.headerShow(false);
    this.emmitAlert.send({ id: 'footerChange', data: 'xiaoxi' });
  }

}
