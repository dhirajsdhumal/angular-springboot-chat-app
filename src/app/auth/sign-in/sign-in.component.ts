import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    if (!this.username || !this.password) {
      alert('Please fill in both fields.');
      return;
    }

    this.apiService.loginUser(this.username, this.password).subscribe(
      (response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token); // Save the token to local storage
          alert('Login Successful!');
          this.router.navigate(['/messages']); // Navigate to the "messages" page
        } else {
          alert('Invalid credentials!');
        }
      },
      (error) => {
        console.error('Login error:', error);
        alert('Login Failed! Please try again.');
      }
    );
  }
}
