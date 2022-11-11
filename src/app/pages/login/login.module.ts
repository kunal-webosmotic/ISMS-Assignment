import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {Route, RouterModule} from '@angular/router';
import {LoaderModule} from '../../shared/components/loader/loader.module';

const routes: Route[] = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule
  ]
})
export class LoginModule {
}
