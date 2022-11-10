import {Injectable} from '@angular/core';
import {HttpService} from '../../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  constructor(private httpService: HttpService) {
  }

  getDriveList(email: string) {
    if (email === null || email === undefined) {
      throw new Error('Required parameter Email was null or undefined when calling describeAccount.');
    }
    return this.httpService.get(`getFilesChanges?email=${email}`);
  }
}
