import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = "devotion";
  authForm: FormGroup;
  isLoginMode = true; // Toggle between login and signup modes
  serverUrl = 'http://localhost:3000/users'; // JSON Server URL

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
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
      this.login(userData);
    } else {
      this.signup(userData);
    }
  }

  // Signup function to store user in db.json
  signup(userData: { username: string; password: string }) {
    this.http.post(this.serverUrl, userData).subscribe(
      () => {
        alert('Signup successful!');
        this.authForm.reset();
        this.isLoginMode = true;
        this.router.navigate(['/usertable']); // Navigate after successful signup
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Login function
  login(userData: { username: string; password: string }) {
    this.http.get<any[]>(this.serverUrl, { params: { username: userData.username } })
      .subscribe(users => {
        const user = users.find(u => u.password === userData.password);
        if (user) {
          alert('Login successful!');
          this.router.navigate(['/usertable']); // Navigate after successful login
        } else {
          alert('Invalid credentials.');
        }
      },
      (error) => {
        console.error(error);
      });
  }
}
