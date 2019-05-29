import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';
declare var AMap: any;
@Component({
  selector: 'app-my-index-page',
  templateUrl: './my-index-page.component.html',
  styleUrls: ['./my-index-page.component.css']
})
export class MyIndexPageComponent implements OnInit {
  map: any;
  constructor(private anData:AnDataService) { }

  ngOnInit() {
    this.anData.headerShow(false);
    this.anData.footerShow(true);
    this.mapInit();
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

}
