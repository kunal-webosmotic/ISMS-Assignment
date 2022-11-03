import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DriveComponent} from './drive.component';
import {Route, RouterModule} from '@angular/router';
import {LoaderModule} from '../../shared/components/loader/loader.module';

const routes: Route[] = [
  {path: '', component: DriveComponent}
];

@NgModule({
  declarations: [
    DriveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule
  ]
})
export class DriveModule {
}
