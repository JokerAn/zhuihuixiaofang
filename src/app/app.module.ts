import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { hasQuanXian } from './routerCanActive';
import { AnHttpService } from './services/an-http.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyIndexPageComponent } from './components/my-index-page/my-index-page.component';
import { MyUserInfoComponent } from './components/my-user-info/my-user-info.component';
import { MyMessageComponent } from './components/my-message/my-message.component';
import { MyMutualAidComponent } from './components/my-mutual-aid/my-mutual-aid.component';
import { MyControlComponent } from './components/my-control/my-control.component';
import { MySafetyCabinetComponent } from './components/my-safety-cabinet/my-safety-cabinet.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyHomeComponent,
    MyIndexPageComponent,
    MyUserInfoComponent,
    MyMessageComponent,
    MyMutualAidComponent,
    MyControlComponent,
    MySafetyCabinetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [hasQuanXian, AnHttpService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
