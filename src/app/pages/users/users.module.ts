import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {Route, RouterModule} from '@angular/router';
import {LoaderModule} from '../../shared/components/loader/loader.module';

const routes: Route[] = [
  {path: '', component: UsersComponent}
];

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule
  ]
})
export class UsersModule {
}
