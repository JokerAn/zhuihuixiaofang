import { Component } from '@angular/core';
import { AnDataService } from './services/an-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zhihuixiaofang';
  constructor(public anData:AnDataService) { 
  }
  close() { 
    this.anData.guestSafeguardShowF(false);
  }
}
