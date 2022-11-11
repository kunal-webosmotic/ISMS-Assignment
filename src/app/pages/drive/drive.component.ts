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
    this.driveData.data = await this._driveService.getDriveList(this.userEmail);
    this.driveData.showLoader = false;
  }
}
