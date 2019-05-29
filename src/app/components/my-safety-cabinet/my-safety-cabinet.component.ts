import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';

@Component({
  selector: 'app-my-safety-cabinet',
  templateUrl: './my-safety-cabinet.component.html',
  styleUrls: ['./my-safety-cabinet.component.css']
})
export class MySafetyCabinetComponent implements OnInit {

  constructor(public anData:AnDataService) { }

  ngOnInit() {
    this.anData.headerName = '安全柜选择';
    this.anData.headerShow(true);
    this.anData.footerShow(false);
  }

}
