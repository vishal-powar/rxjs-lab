import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }

  getPosts() {
    return this.http.get<any[]>(`${this.baseUrl}/posts`);
  }

  getUserPosts(userId: number) {
    return this.http.get<any[]>(
      `${this.baseUrl}/posts?userId=${userId}`
    );
  }
}
