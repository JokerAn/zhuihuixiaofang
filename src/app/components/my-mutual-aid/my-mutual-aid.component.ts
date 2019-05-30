import { Component, OnInit } from '@angular/core';
import { AnDataService } from 'src/app/services/an-data.service';
import { EmmitAlertService } from 'src/app/services/emmit-alert.service';

@Component({
  selector: 'app-my-mutual-aid',
  templateUrl: './my-mutual-aid.component.html',
  styleUrls: ['./my-mutual-aid.component.css']
})
export class MyMutualAidComponent implements OnInit {
  public relativeList: any = [
    { typeName: '孩子', imgUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=830408568,2614684991&fm=58' },
    { typeName: '父母', imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1664703051,252020522&fm=27&gp=0.jpg' },
    { typeName: '同事', imgUrl: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=616212579,3789972006&fm=85&s=E43EAC76DBF3E3ED0A4DA16F0300E078' },
  ];
  public addFriendList: any = [
    { typeName: '微信', imgUrl:'./assets/imgs/mutualAid/weixin.png'},
    { typeName: 'QQ', imgUrl:'./assets/imgs/mutualAid/qq.png'},
    { typeName: '二维码', imgUrl:'./assets/imgs/mutualAid/qrcode.png'},
  ]
  public phoneNameList: any = [
    {
      userName: '张三丰',
      imgUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=830408568,2614684991&fm=58',
      finish: true
    },
    {
      userName: '张无忌',
      imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1664703051,252020522&fm=27&gp=0.jpg',
      finish: false
    }
  ]
  constructor(private anData: AnDataService, private emmitAlert:EmmitAlertService) { }

  ngOnInit() {
    this.anData.headerShow(false);
    this.anData.footerShow(true);
    this.emmitAlert.send({ id: 'footerChange', data: 'huzhu' })
  }

}
