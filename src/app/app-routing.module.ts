import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { Detail1Component } from './detail1/detail1.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/items' },
  { path: 'detail/:nItem', component: DetailComponent},
  { path: 'detail1/:nItem1', component: Detail1Component},
  { path: 'items', component: ListComponent },
  { path: '**', redirectTo: '/items' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
