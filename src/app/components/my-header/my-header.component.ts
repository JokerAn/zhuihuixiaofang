import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoHome() { 
    this.router.navigate(['/index']);
  }
}
