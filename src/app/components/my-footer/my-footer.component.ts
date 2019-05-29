import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {
  name1: any = '主页';
  name2: any = '消息';
  name22: any = '控制';
  name4: any = '互助';
  name5: any = '我的';
  name1Img: any = '/assets/imgs/homeImg.jpg';
  name2Img: any = '/assets/imgs/homeImg.jpg';
  name22Img: any = '/assets/imgs/homeImg.jpg';
  name3Img: any = '/assets/imgs/homeImg.jpg';
  name33Img: any = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=296897715,2370665624&fm=11&gp=0.jpg';
  name4Img: any = '/assets/imgs/homeImg.jpg';
  name5Img: any = '/assets/imgs/homeImg.jpg';
  constructor(public anData:AnDataService) { }

  ngOnInit() {
  }
  showGuest() {
    this.anData.guestSafeguardShowF(true);
  }
}
