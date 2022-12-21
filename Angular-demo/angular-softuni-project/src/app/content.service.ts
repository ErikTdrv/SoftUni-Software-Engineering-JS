import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interfaces';
import { environment } from '../environments/environment'
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  loadThemes() {
    return this.http.get<ITheme[]>(`${API_URL}/themes`)
  }
  loadPosts(take?: number) {
    const query = take ? `?limit=${take}` : ''
    return this.http.get<ITheme[]>(`${API_URL}/themes${query}`)
  }
  loadTheme(id: string) {
    return this.http.get<ITheme>(`${API_URL}/themes/${id}`)
  }
  createTheme(data: any){
    return this.http.post<ITheme>(`${API_URL}/themes`, data, {withCredentials: true})
  }
}
