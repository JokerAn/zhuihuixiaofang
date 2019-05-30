import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';
import { Router } from '@angular/router';
import { EmmitAlertService } from 'src/app/services/emmit-alert.service';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {

  shouye = {
    pageUrl: '/index',
    name1Img: './assets/imgs/footer/shouye-no.png',
    name1ImgActive: './assets/imgs/footer/shouye-yes.png',
    checked: false
  };
  huzhu = {
    pageUrl: '/mutualAid',
    name2Img: './assets/imgs/footer/huzhu-no.png',
    name2ImgActive: './assets/imgs/footer/huzhu-yes.png',
    checked: false
  };
  kongzhi = {
    pageUrl: '/control',
    name22Img: './assets/imgs/footer/kongzhi-no.png',
    name22ImgActive: './assets/imgs/footer/kongzhi-yes.png',
    checked: false
  };
  xiaoxi = {
    pageUrl: '/message',
    name4Img: './assets/imgs/footer/xiaoxi-no.png',
    name4ImgActive: './assets/imgs/footer/xiaoxi-yes.png',
    checked: false
  };
  wode = {
    pageUrl: '/userInfo',
    name5Img: './assets/imgs/footer/wode-no.png',
    name5ImgActive: './assets/imgs/footer/wode-yes.png',
    checked: false
  };
  
  
  
  name3Img: any = './assets/imgs/footer/anquan.png';
  name33Img: any = './assets/imgs/footer/saoma.png';
  
  
  constructor(public anData: AnDataService, private router: Router,private emmitAlert:EmmitAlertService) {
    if (this.emmitAlert.$on) {
      this.emmitAlert.$on.subscribe((emmitData: any) => {
        console.log('我是app.component.ts页面 我接受到了 ' + JSON.stringify(emmitData) + ' 我可以做一些操作了包括关闭弹框');
        switch (emmitData.id) {
          case 'footerChange':
            this.changeIcon(emmitData.data);
            break
          default:
            console.log('接收到广播 但是没有对应的操作 走了默认')
        }
        console.groupEnd();
      })
    }
   }

  ngOnInit() {
  }
  showGuest() {
    this.anData.guestSafeguardShowF(true);
  }
  changeIcon(res:any) { 
    this.shouye.checked = false;
    this.huzhu.checked = false;
    this.kongzhi.checked = false;
    this.xiaoxi.checked = false;
    this.wode.checked = false;
    this[res].checked = true;
  }
  gotoPage(res: any) { 
    console.log(res);
    
    this.shouye.checked = false;
    this.huzhu.checked = false;
    this.kongzhi.checked = false;
    this.xiaoxi.checked = false;
    this.wode.checked = false;
    res.checked = true;
    this.router.navigate([res.pageUrl]);
  }
}
