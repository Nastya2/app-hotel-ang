import { AuthStorageService } from './../content/login/authStorage.service';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ErrorsService } from '../content/errors/errors.service';

export class AuthInterceptor implements HttpInterceptor {

    constructor(private errorService: ErrorsService, private authStorageService: AuthStorageService) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
        headers: req.headers
        .set('Content-Type', 'application/json')
        .set('Authorization', `jwt ${this.authStorageService.getItemStorage('token')}`)
    });

    return next.handle(authReq).pipe(
        tap(event => {
        if (event instanceof HttpResponse)  { return; }
        }, err => {
        if (err instanceof HttpErrorResponse) {
            this.errorService.setError(err.message); }
        }));
    }
 }