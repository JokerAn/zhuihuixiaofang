import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(private anData:AnDataService) { }

  ngOnInit() {
    this.anData.headerName='主页';
    this.anData.headerShow(true);
    this.anData.footerShow(false);
  }
  openBox(res: any) {
    console.log(res)
   }
  callHelp() {
    console.log('呼救')
  }
  selectSafetyCabinet() { 
    
  }
}
