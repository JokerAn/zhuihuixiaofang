import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';
import { AnHttpService } from 'src/app/services/an-http.service';
import { EmmitAlertService } from 'src/app/services/emmit-alert.service';
import {
  HttpClient, HttpParams, HttpHeaders, HttpErrorResponse, HttpEvent,
  HttpRequest, HttpInterceptor, HttpEventType
}
  from '@angular/common/http';
@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(private anData: AnDataService,
     public anHttp: AnHttpService,
    public emmitAlert: EmmitAlertService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.anData.headerName='开柜';
    this.anData.headerShow(true);
    this.anData.footerShow(false);
    console.log('我是index');
  }
  openBox(res: any) {

    let suijishu = +new Date();
    this.anHttp.get('https://api.iqcspace.com/api-client/front/equipment/v2/actuator/' + res + '/501?waitForResponse=false&a='+suijishu, {})
      .subscribe((result: any) => { 
        console.log(result);
        this.anData.alertMsgShowF(result.msg);
    })
   }
  callHelp() {
    console.log('呼救')
  }
  selectSafetyCabinet() { 
    
  }
  
}
