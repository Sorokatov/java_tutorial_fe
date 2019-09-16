import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  private apiUrl = environment.serverUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  get<T>(url: String): Observable<T> {
    return this.http.get<T>(this.apiUrl + url + '/', this.httpOptions);
  }

  post<T>(url: String, body?: any): Observable<T> {
    return this.http.post<T>(this.apiUrl + url + '/', body, this.httpOptions);
  }

  put<T>(url: String, body?: any): Observable<T> {
    return this.http.put<T>(this.apiUrl + url + '/', body, this.httpOptions);
  }

  delete<T>(url: String, parameter: any): Observable<T> {
    return this.http.delete<T>(this.apiUrl + url + '/' + parameter, this.httpOptions);
  }
}
