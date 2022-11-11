import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/API/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any = {
    showLoader: true,
    data: []
  };

  constructor(private _userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getUserList();
  }

  async getUserList() {
    try {
      this.users.data = await this._userService.getUsers();
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

}
