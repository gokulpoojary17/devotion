import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  serverUrl = 'http://localhost:3000/users'; // JSON Server URL

  authForm: FormGroup;
  isLoginMode = true; // Toggle between login and signup modes

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, // Inject the AuthService
    private router: Router
  ) {
    this.authForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // Toggle between login and signup
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  // Handle form submission
  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    const userData = this.authForm.value;

    if (this.isLoginMode) {
      this.authService.login(userData).subscribe(users => {
        const user = users.find((u: { password: any; }) => u.password === userData.password);
        if (user) {
          alert('Login successful!');
          this.router.navigate(['/usertable']); // Navigate after successful login
        } else {
          alert('Invalid credentials.');
        }
      });
    } else {
      this.authService.signup(userData)
        .then(() => this.router.navigate(['/usertable'])) // Navigate after successful signup
        .catch(error => console.error(error)); // Optional: handle promise errors
    }
  }
}
