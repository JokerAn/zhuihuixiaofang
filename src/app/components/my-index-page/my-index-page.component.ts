import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';
import { EmmitAlertService } from 'src/app/services/emmit-alert.service';
import { AnHttpService } from 'src/app/services/an-http.service';
import { Router } from '@angular/router';
declare var AMap: any;
@Component({
  selector: 'app-my-index-page',
  templateUrl: './my-index-page.component.html',
  styleUrls: ['./my-index-page.component.css']
})
export class MyIndexPageComponent implements OnInit {
  map: any;
  constructor(private anData: AnDataService, private emmitAlert: EmmitAlertService,
    private anHttp: AnHttpService,private router:Router) {
    if (this.emmitAlert.$on) {
      this.emmitAlert.$on.subscribe((emmitData: any) => {
        console.log('我是app.component.ts页面 我接受到了 ' + JSON.stringify(emmitData) + ' 我可以做一些操作了包括关闭弹框');
        switch (emmitData.id) {
          case 'emmitTest03':
            console.log('下面这一行是关于公共弹框的广播数据');
            break
          case 'emmitTest03Pop':
            console.log('你点击了取消按钮');
            break
          default:
            console.log('接收到广播 但是没有对应的操作 走了默认')
        }
      })
    }
  }

  ngOnInit() {
    this.anData.headerShow(false);
    this.anData.footerShow(true);
    this.mapInit();
    this.emmitAlert.send({ id: 'footerChange', data: 'shouye' });

  }
  mapInit() {
    this.map = new AMap.Map('container', {
      zoom: 15,//缩放级别// PC上，参数zoom可设范围：[3,18]；// 移动端：参数zoom可设范围：[3,19]
      center: [116.18500, 39.90600],//设置地图中心点坐标
      viewMode: '2D',  //设置地图模式
      lang: 'zh_cn',  //设置地图语言类型
    });
    //实时路况图层
    var trafficLayer = new AMap.TileLayer.Traffic({
      zIndex: 10
    });
    this.map.add(trafficLayer);//添加图层到地图
    var marker = new AMap.Marker({
      position: [116.18300, 39.90618]//位置
    })
    this.map.add(marker);//添加到地图
  }
  openAll() {
    this.router.navigate(['/home']);
  }

}
