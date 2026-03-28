import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthApiService } from './api/auth-api.service';
import { LoginRequest, UserInfo } from './models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'access_token';
  private readonly currentUserSubject = new BehaviorSubject<UserInfo | null>(null);

  readonly currentUser$: Observable<UserInfo | null> = this.currentUserSubject.asObservable();

  constructor(private authApi: AuthApiService) {}

  get isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  login(request: LoginRequest): Observable<UserInfo> {
    return this.authApi.login(request).pipe(
      tap(response => localStorage.setItem(this.tokenKey, response.accessToken)),
      tap(() => this.loadCurrentUser())
    ) as any;
  }

  loadCurrentUser(): void {
    if (!this.isAuthenticated) return;
    this.authApi.me().subscribe({
      next: user => this.currentUserSubject.next(user),
      error: () => this.logout()
    });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.currentUserSubject.next(null);
  }
}
