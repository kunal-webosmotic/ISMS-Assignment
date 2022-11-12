import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page.component';
import {Route, RouterModule} from '@angular/router';


const routes: Route[] = [
  {path: '', component: ErrorPageComponent}
];

@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ErrorPageModule { }
