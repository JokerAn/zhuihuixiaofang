import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.css']
})
export class MyMessageComponent implements OnInit {

  constructor(private anData:AnDataService) { }

  ngOnInit() {
    this.anData.footerShow(true);
    this.anData.headerShow(false);
  }

}
