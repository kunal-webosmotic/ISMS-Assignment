import {Component, OnInit} from '@angular/core';
import {DriveService} from '../../services/API/drive/drive.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, takeUntil} from 'rxjs/operators';
import {ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit {

  driveData: any = {
    showLoader: true,
    data: []
  };
  userEmail: any = '';
  private readonly destroy$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private _driveService: DriveService) {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe(event => {
      const queryParam: any = this.activatedRoute.snapshot.params;
      if (!queryParam.email) {
        this.router.navigate(['users']);
      } else {
        this.userEmail = queryParam.email;
        this.getDriveList();
      }
    });
  }

  ngOnInit(): void {
  }

  async getDriveList() {
    //let driveData: any = await this._driveService.getDriveList('test@gmail.com');
    setTimeout(() => {
      this.driveData.data = [
        {
          'id': 1,
          'fileId': '121324234',
          'fileName': 'test.doc',
          'owner': 'bhumika.webosmoti@gmail.com',
          'lastModifyingUser': 'test@gmail.com',
          'lastModifiedDate': '2022-11-10 12:51:35',
          'createdDate': '2022-11-10 12:51:35',
          'type': 'file',
          'iconUrl': 'www.httptest.com'
        },
        {
          'id': 2,
          'fileId': '121324234131231',
          'fileName': 'abc.batch',
          'owner': 'bhumika.webosmoti@gmail.com',
          'lastModifyingUser': 'bhumika.webosmoti@gmail.com',
          'lastModifiedDate': '2022-11-10 12:51:35',
          'createdDate': '2022-11-10 12:51:35',
          'type': 'file',
          'iconUrl': 'www.httptest.com'
        }
      ];
      this.driveData.showLoader = false;
    }, 5000);
  }

}
