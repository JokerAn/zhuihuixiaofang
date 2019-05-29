import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AnDataService } from './services/an-data.service';
@Injectable()
export class hasQuanXian implements CanActivate {
  constructor(private router: Router, private anData: AnDataService) {
    
   }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.anData.isAdminF();
    return true
   }
};

