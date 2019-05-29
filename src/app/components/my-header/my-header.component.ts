import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnDataService } from 'src/app/services/an-data.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  constructor(private router:Router,public anData:AnDataService) { }

  ngOnInit() {
  }
  gotoHome() { 
    this.router.navigate(['/index']);
  }
}
