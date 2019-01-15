
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './content/page/page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'page',
    pathMatch: 'full'
  },
  {
    path: 'page',
    component: PageComponent
  },
  { 
    path: 'login',
    loadChildren: './content/login/login.module#LoginModule'
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
export class AppRoutingModule {}
