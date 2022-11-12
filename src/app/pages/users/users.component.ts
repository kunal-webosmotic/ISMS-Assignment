import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/API/user/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any = {
    showLoader: true,
    data: [],
    currentLoginUserEmail: ''
  };

  constructor(private _userService: UserService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getUserList();
  }

  async getUserList() {
    try {
      const data: any = await this._userService.getUsers();
      this.users.data = data.users;
      this.users.currentLoginUserEmail = data.email;
      this.users.showLoader = false;
    } catch (e: any) {
      console.log('e--->', e);
      this.users.data = [];
      this.users.showLoader = false;
    }
  }

  accessDrive(userObj: any) {
    this.router.navigate(['drive/' + userObj.email]);
  }

  async changeNotification(userObj: any) {
    try {
      await this._userService.updateNotification(userObj.email, userObj.status);
    } catch (e: any) {
    }
  }

  logout() {
    this.authService.removeToken();
    this.router.navigate(['login']);
  }

}
