import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root',
})

export class AuthStorageService {

    private jwt: JwtHelperService;

    constructor(private router: Router) { this.jwt = new JwtHelperService(); }
    // isTokenExpired() === false - не истек

    public checkLogin(): boolean {
        const token: string | null = this.getItemStorage('token');
        if (token && !this.jwt.isTokenExpired(token)) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

    public saveInStorage(token: {access_token: string, expires_on: string, username: string}): void {
        if (token.access_token) {
            localStorage.setItem('token', token.access_token);
        } else {
            throw new Error('нет токена');
        }
        if (token.username) {
            localStorage.setItem('username', token.username);
        } else {
            throw new Error('нет имени пользователя');
        }
    }

    public logout(): void {
        localStorage.clear();
        this.router.navigate(['login']);
    }

    public getItemStorage(item: 'token' | 'username'): string | null {
        return localStorage.getItem(item) || null;
    }

}

