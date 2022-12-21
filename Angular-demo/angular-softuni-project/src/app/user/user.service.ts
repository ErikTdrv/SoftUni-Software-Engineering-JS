import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser | undefined | null;
  get isLogged(): boolean {
    return !!this.user;
  }
  constructor(private http: HttpClient) { }

  login(data: { email: string; password: string }) {
    return this.http.post<IUser>(`${API_URL}/login`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }
  register(data: { username: string; email: string; tel: string; password: string }) {
    return this.http.post<IUser>(`${API_URL}/register`, data, { withCredentials: true }).pipe(
      tap((user) => {
        this.user = user
      })
    );
  }
  logout() {
    return this.http.post<IUser>(`${API_URL}/logout`, {}, { withCredentials: true }).pipe(
      tap(() => this.user = null)
    );
  }
  getProfileInfo(){
    return this.http.get<IUser>(`${API_URL}/users/profile`, { withCredentials: true}).pipe(
      tap((user) => this.user = user)
    )
  }
  updateProfileInfo(data: Object){
    return this.http.put<IUser>(`${API_URL}/users/profile`, data, { withCredentials: true} ).pipe(
      tap((user) => this.user = user)
    )
  }
}
