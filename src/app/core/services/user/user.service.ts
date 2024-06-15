import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  constructor() { }

  // login tipo post:
  login(user: any) {
    return this.http.post(`${this.apiUrl}user/login`, user);
  }

  getUsers() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
    return this.http.get(`${this.apiUrl}user`);
  }

  getUserById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  createUser(user: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', user);
  }

  updateUser(user: any) {
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}
