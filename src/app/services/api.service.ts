import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.mdel';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/auth/users`);
  }

  // Get messages for a specific user
  getMessages(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/messages/${userId}`);
  }

  // Send a new message
  sendMessage(message: { content: string; receiverId: number }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/messages`, message);
  }

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }

  loginUser(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/auth/login`; // Update endpoint as per your backend
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, body, { headers });
  }

  // getUnreadMessages(receiverId: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/api/messages/unread/${receiverId}`, this.getAuthHeaders());
  // }

  // getAllMessages(receiverId: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/api/messages/all/${receiverId}`, this.getAuthHeaders());
  // }

  

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }
}
