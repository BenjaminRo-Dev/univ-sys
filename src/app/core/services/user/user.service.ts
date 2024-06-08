import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  constructor() { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
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
