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
    { name: '8号楼12层2号' }, { name: '5号楼01层1号' }
  ]
  ngOnInit() {
    this.anData.headerName='控制';
    this.anData.headerShow(true);
    this.anData.footerShow(true);
    this.emmitAlert.send({ id: 'footerChange', data: 'kongzhi' });
  }
  openAll() { 
    this.anHttp.put('https://www.iqcspace.com/release/api-iot/equipment/api/v1/actuator/' + 'Cabinet-text-14' + '?targetStateId=501&waitForResponse=false')
      .subscribe((result: any) => {
        this.anData.alertMsgShowF(result.msg);
      })
  }
  openKaiGui(res:any) { 
    console.log(res);
    this.anData.alertMsgShowF('打开柜子');
  }
  openJianKong(res: any) {
    console.log(res);
    this.anData.alertMsgShowF('打开监控');
    
   }
  openWiZhi(res: any) {
    console.log(res);
    this.anData.alertMsgShowF('打开物质');
  }

}
