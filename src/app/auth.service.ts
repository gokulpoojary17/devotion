import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serverUrl = 'http://localhost:3000/users'; // JSON Server URL

  constructor(private http: HttpClient) {}

  // Signup method with error handling
  async signup(userData: { username: string; password: string }): Promise<void> {
    try {
      await this.http.post(this.serverUrl, userData).toPromise();
      alert('Signup successful!');
    } catch (error) {
      this.handleError(error);
    }
  }

  // Login method with error handling
  login(userData: { username: string; password: string }): Observable<any> {
    return this.http.get<any[]>(this.serverUrl, { params: { username: userData.username } })
      .pipe(
        catchError(this.handleObservableError) // Handle errors in observable stream
      );
  }

  // Error handling for promises
  private handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      // Server-side error
      console.error('Server error:', error.message);
    } else {
      // Client-side error
      console.error('Client error:', error.message);
    }
    alert('An error occurred. Please try again later.');
  }

  // Error handling for observables
  private handleObservableError(error: HttpErrorResponse): Observable<never> {
    console.error('Observable error:', error.message);
    alert('An error occurred. Please try again later.');
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
