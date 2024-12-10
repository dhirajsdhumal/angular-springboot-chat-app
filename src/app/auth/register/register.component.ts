import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '', // Added confirmPassword field for validation
  };

  constructor(private apiService: ApiService, private router: Router) {}

  register() {
    // Check if password and confirmPassword match
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // API call for registration
    this.apiService.registerUser(this.user).subscribe(
      (response) => {
        alert('Registration Successful!');
        this.router.navigate(['/login']); // Navigate to login page on success
      },
      (error) => {
        console.error('Registration error:', error);
        alert('Registration Failed!');
      }
    );
  }
}
