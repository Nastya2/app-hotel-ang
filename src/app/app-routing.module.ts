
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './content/login/login.component';
import { PageComponent } from './content/page/page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'page',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'page',
    component: PageComponent
  },
  {
    path: '**',
    redirectTo: 'page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
