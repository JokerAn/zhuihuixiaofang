import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';
import { AnHttpService } from 'src/app/services/an-http.service';
import { EmmitAlertService } from 'src/app/services/emmit-alert.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(private anData: AnDataService,
     public anHttp: AnHttpService,
     public emmitAlert: EmmitAlertService
  ) { }

  ngOnInit() {
    this.anData.headerName='开柜';
    this.anData.headerShow(true);
    this.anData.footerShow(false);
    console.log('我是index');
  }
  openBox(res: any) {
    console.log(res);
    this.anHttp.put('https://www.iqcspace.com/release/api-iot/equipment/api/v1/actuator/' + res + '?targetStateId=501&waitForResponse=false')
      .subscribe((result: any) => { 
        this.anData.alertMsgShowF(result.msg);
    })
   }
  callHelp() {
    console.log('呼救')
  }
  selectSafetyCabinet() { 
    
  }
  
}
