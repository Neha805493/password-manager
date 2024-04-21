import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Password } from './password';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = 'http://localhost:3000/passwords';

  constructor(private http: HttpClient) { }

  getPasswords(): Observable<Password[]> {
    return this.http.get<Password[]>(this.apiUrl);
  }

  getPassword(id: number|string): Observable<Password> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Password>(url);
  }

  addPassword(password: Password): Observable<Password> {
    return this.http.post<Password>(this.apiUrl, password);
  }

  updatePassword(password: Password): Observable<Password> {
    const url = `${this.apiUrl}/${password.id}`;
    return this.http.put<Password>(url, password);
  }

  deletePassword(id: number|string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
