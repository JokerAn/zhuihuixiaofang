import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnDataService {

  constructor() { }
  public footerTag:any = false;
  public headerTag:any = false;
  public footerShow(res:any) { 
    this.footerTag = res;
  }
  public headerShow(res:any) { 
    this.headerTag = res;
  }
  isAdmin = false;
  isAdminF() { 
    let urls = location.href;
    console.log(urls);
    console.log(urls.includes('admin'));
    if (urls.includes('admin')) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
  headerName = '';
  guestSafeguardShow = false;
  guestSafeguardShowF(res:any) { 
    this.guestSafeguardShow = res;
  };
  alertMsg = '';
  alertMsgShow = false;
  alertMsgShowF(res) { 
    this.alertMsg = res;
    this.alertMsgShow = true;
    setTimeout(() => {
      this.alertMsgShow=false
    },1500)
  };
  anhuancun: any = (+(new Date()) + '').slice(0, 6);
}
