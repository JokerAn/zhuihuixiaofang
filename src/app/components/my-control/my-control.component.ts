import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';

@Component({
  selector: 'app-my-control',
  templateUrl: './my-control.component.html',
  styleUrls: ['./my-control.component.css']
})
export class MyControlComponent implements OnInit {

  constructor(public anData:AnDataService) { }
  guiziList: any = [
    { name: '8号楼12层2号' }, { name: '5号楼01层1号' }
  ]
  ngOnInit() {
    this.anData.headerName='控制';
    this.anData.headerShow(true);
    this.anData.footerShow(true);
  }
  openAll() { 
    this.anData.alertMsgShowF('一键全开');
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
