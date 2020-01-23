
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {}

    public auth(authData: {username: string, password: string}): Observable<any> {
        const url = `${environment.url}auth`;


        return this.http.post(url, JSON.stringify(authData));
    }

    public logout(): Observable<any> {
        const url = `${environment.url}logout`;
        return this.http.post(url, {});
    }
}
