import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyIndexPageComponent } from './components/my-index-page/my-index-page.component';
import { MyUserInfoComponent } from './components/my-user-info/my-user-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MyHomeComponent },
  { path: 'index', component: MyIndexPageComponent },
  { path: 'userInfo', component: MyUserInfoComponent },
  { path: '**', component: MyHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
