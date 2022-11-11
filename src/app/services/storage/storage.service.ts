import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements Storage {

  [index: number]: string;

  [key: string]: any;

  length: any = 0;

  constructor(
    private cookieService: CookieService
  ) {
  }

  public clear(): void {
    this.cookieService.deleteAll();
  }

  public getItem(key: string): string {
    return this.cookieService.get(key);
  }

  public key(index: number): string {
    return '';
  }

  public removeItem(key: string): void {
    this.cookieService.delete(key);
  }

  public setItem(key: string, data: string): void {
    this.cookieService.set(key, data);
  }
}
