import { NgModule } from '@angular/core';
import { hasQuanXian } from './routerCanActive';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyIndexPageComponent } from './components/my-index-page/my-index-page.component';
import { MyUserInfoComponent } from './components/my-user-info/my-user-info.component';
import { MyMessageComponent } from './components/my-message/my-message.component';
import { MyMutualAidComponent } from './components/my-mutual-aid/my-mutual-aid.component';
import { MyControlComponent } from './components/my-control/my-control.component';
import { MySafetyCabinetComponent } from './components/my-safety-cabinet/my-safety-cabinet.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MyHomeComponent, canActivate: [hasQuanXian] },
  { path: 'index', component: MyIndexPageComponent, canActivate: [hasQuanXian]},
  { path: 'userInfo', component: MyUserInfoComponent, canActivate: [hasQuanXian]},
  { path: 'message', component: MyMessageComponent,canActivate: [hasQuanXian] },
  { path: 'mutualAid', component: MyMutualAidComponent, canActivate: [hasQuanXian] },
  { path: 'control', component: MyControlComponent, canActivate: [hasQuanXian] },
  { path: 'safetyCabinet', component: MySafetyCabinetComponent, canActivate: [hasQuanXian] },
  { path: '**', component: MyHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
