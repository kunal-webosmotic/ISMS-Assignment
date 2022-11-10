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
              private route: Router) {
  }

  ngOnInit(): void {
    this.getUserList();
  }

  async getUserList() {
    //const userData: any = await this._userService.getUsers();
    //console.log('userData--->', userData);
    setTimeout(() => {
      this.users.data = [
        {
          'id': 1,
          'email': 'bhumika.webosmotic@gmail.com',
          'channelId': 'a719d7ff-7357-4598-b14b-1d05fb757095',
          'channelExpirationTime': 1668062755452,
          'status': true
        },
        {
          'id': 2,
          'email': 'test@gmail.com',
          'channelId': 'a719d7ff-7357-4598-b14b-1d05fb757096',
          'channelExpirationTime': 1668062755453,
          'status': true
        }
      ];
      this.users.showLoader = false;
    }, 5000);
  }

  accessDrive(userObj: any) {
    console.log('userObj--->', userObj);
    this.route.navigate(['drive'], {queryParams: {'email': userObj.email}});
  }

}
