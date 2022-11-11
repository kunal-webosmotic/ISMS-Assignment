import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'login/:token',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'drive/:email',
    loadChildren: () => import('./pages/drive/drive.module').then(m => m.DriveModule),
  },
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
