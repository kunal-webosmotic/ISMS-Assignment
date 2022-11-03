import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.users.data = [
        {
          name: 'Test User 1',
          email: 'testuser1@gmail.com'
        },
        {
          name: 'Test User 2',
          email: 'testuser2@gmail.com'
        },
        {
          name: 'Test User 3',
          email: 'testuser3@gmail.com'
        },
        {
          name: 'Test User 4',
          email: 'testuser4@gmail.com'
        }
      ];
      this.users.showLoader = false;
    }, 5000);
  }

}
