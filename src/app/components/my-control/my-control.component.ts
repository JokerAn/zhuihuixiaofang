import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';
import { EmmitAlertService } from 'src/app/services/emmit-alert.service';
import { AnHttpService } from 'src/app/services/an-http.service';

@Component({
  selector: 'app-my-control',
  templateUrl: './my-control.component.html',
  styleUrls: ['./my-control.component.css']
})
export class MyControlComponent implements OnInit {

  constructor(public anData: AnDataService, private emmitAlert: EmmitAlertService, private anHttp:AnHttpService) { }
  guiziList: any = [
    { name: '8号楼11层2号', id: 'Cabinet-text-09' }, { name: '5号楼01层1号', id: 'Cabinet-text-10' }
  ]
  ngOnInit() {
    this.anData.headerName='控制';
    this.anData.headerShow(true);
    this.anData.footerShow(true);
    this.emmitAlert.send({ id: 'footerChange', data: 'kongzhi' });
  }
  openAll() { 
    // for (let i = 10; i < 16; i++) {
    //   this.anHttp.get('https://api.iqcspace.com/api-client/front/equipment/v2/actuator/' + 'Cabinet-text-'+i + '/501?waitForResponse=false', {})
    //     .subscribe((result: any) => {
    //       console.log(result);
    //       this.anData.alertMsgShowF(result.msg);
    //     })
    // }
    let suijishu = +new Date();
    this.anHttp.get('https://api.iqcspace.com/api-client/front/equipment/v2/actuator/' + 'Cabinet-text-all/501?waitForResponse=false&a='+suijishu, {})
      .subscribe((result: any) => {
        console.log(result);
        this.anData.alertMsgShowF(result.msg);
      })
  }
  openKaiGui(res: any) { 
    let suijishu = +new Date();
    this.anHttp.get('https://api.iqcspace.com/api-client/front/equipment/v2/actuator/' + res.id + '/501?waitForResponse=false&a=' + suijishu, {})
      .subscribe((result: any) => {
        console.log(result);
        this.anData.alertMsgShowF(result.msg);
      })
  }
  openJianKong(res: any) {
    let suijishu = +new Date();
    this.anHttp.get('https://api.iqcspace.com/api-client/front/equipment/v2/actuator/' + res.id + '/501?waitForResponse=false&a=' + suijishu, {})
      .subscribe((result: any) => {
        console.log(result);
        this.anData.alertMsgShowF(result.msg);
      })
    
   }
  openWiZhi(res: any) {
    let suijishu = +new Date();
    this.anHttp.get('https://api.iqcspace.com/api-client/front/equipment/v2/actuator/' + res.id + '/501?waitForResponse=false&a=' + suijishu, {})
      .subscribe((result: any) => {
        console.log(result);
        this.anData.alertMsgShowF(result.msg);
      })
  }

}
