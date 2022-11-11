import {Injectable} from '@angular/core';
import {HttpService} from '../../http/http.service';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) {
  }

  /**
   * Describe a users.
   * */

  getUsers() {
    return this.httpService.get('getUsers');
  }

  updateNotification(email: string, status: any) {
    if (email === '' || status === '') {
      throw new Error('Required parameter Email and Statu swas null or undefined when calling updateNotification.');
    }
    return this.httpService.post('updateNotificationStatus', {email, status});
  }
}
