import {Component, OnInit} from '@angular/core';
import {filter, takeUntil} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ReplaySubject} from 'rxjs';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private readonly destroy$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe(event => {
      const queryParam: any = this.activatedRoute.snapshot.params;
      if (this.authService.getToken() !== null) {
        this.router.navigate(['users']);
      } else if (queryParam.token) {
        this.authService.setToken(queryParam.token);
        this.router.navigate(['users']);
      } else {
        window.location.href = 'https://poc.webosmotic.com/oauth_login';
      }
    });
  }

  ngOnInit(): void {

  }

}
