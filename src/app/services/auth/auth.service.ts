import {Injectable} from '@angular/core';
import {StorageService} from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static COOKIE_NAME = 'ISMS';

  constructor(private storageService: StorageService) {
  }

  getToken(): string | null {
    const getCookie = this.storageService.getItem(AuthService.COOKIE_NAME);
    if (getCookie && getCookie.indexOf('path') === -1) {
      return getCookie;
    }
    return null;
  }

  /**
   * Set auth token
   * @param {string} authToken
   * */
  setToken(authToken: string) {
    this.storageService.setItem(AuthService.COOKIE_NAME, authToken);
  }

  removeToken(): void {
    this.storageService.removeItem(AuthService.COOKIE_NAME);
  }
}
