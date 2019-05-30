import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnDataService } from 'src/app/services/an-data.service';
import { EmmitAlertService } from 'src/app/services/emmit-alert.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  constructor(private router: Router, public anData: AnDataService,
    private emmitAlert:EmmitAlertService) { }

  ngOnInit() {
  }
  gotoHome() { 
    this.router.navigate(['/index']);
    this.emmitAlert.send({ id: 'footerChange' ,data:'shouye'})
    
  }
}
