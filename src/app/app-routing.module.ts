import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CComponent }  from './app-main/container/c/c.component';
import { DComponent }  from './app-main/container/d/d.component';

const appRoutes: Routes = [
  {
    path: 'c',
    component: CComponent
  },
  {
    path: 'd',
    component: DComponent
  },
  { path: '',   redirectTo: '/c', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes )
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    CComponent,
    DComponent
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
