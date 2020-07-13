import {HttpClientModule, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class TokenInterceptor implements HttpClientModule{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer token---------------'
      }
    });
    return next.handle(req);
  }
}
