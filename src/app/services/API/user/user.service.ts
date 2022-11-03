import {Injectable} from '@angular/core';
import {HttpService} from '../../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) {
  }

  /**
   * Describe a users.
   * */

  describeUsers() {
    return this.httpService.get(`/users`);
  }
}
