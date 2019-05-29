import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyIndexPageComponent } from './components/my-index-page/my-index-page.component';
import { MyUserInfoComponent } from './components/my-user-info/my-user-info.component';
import { MyMessageComponent } from './components/my-message/my-message.component';
import { MyMutualAidComponent } from './components/my-mutual-aid/my-mutual-aid.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyHomeComponent,
    MyIndexPageComponent,
    MyUserInfoComponent,
    MyMessageComponent,
    MyMutualAidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
