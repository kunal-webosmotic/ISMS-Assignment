import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken: any = this.authService.getToken();
    if (authToken !== null) {
      if (authToken && !request.headers.has('Authorization')) {
        if (request.url.startsWith(environment.API_URL)) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${authToken}`
            }
          });
        }
      }
    } else {
      this.router.navigate(['login']);
    }
    
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
      }, (error: any) => {
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 401:
              console.error('STATUS CODE :: 401 =>', error.error);
              this.authService.removeToken();
              this.router.navigate(['/login']);
              break;
            case 403:
              console.error('STATUS CODE :: 403 =>', error.error);
              this.router.navigate(['/login']);
              break;
            default:
          }
        }
      })
    );
  }
}
