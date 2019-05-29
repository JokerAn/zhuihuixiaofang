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
}
