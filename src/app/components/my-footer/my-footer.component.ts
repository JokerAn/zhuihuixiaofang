import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {
  name1: any = '主页';
  name2: any = '消息';
  name4: any = '互助';
  name5: any = '我的';
  name1Img: any = '/assets/imgs/homeImg.jpg';
  name2Img: any = '/assets/imgs/homeImg.jpg';
  name3Img: any = '/assets/imgs/homeImg.jpg';
  name4Img: any = '/assets/imgs/homeImg.jpg';
  name5Img: any = '/assets/imgs/homeImg.jpg';
  constructor() { }

  ngOnInit() {
  }

}
