import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  readonly form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage = '';

  onSubmit(): void {
    if (this.form.invalid) return;
    this.errorMessage = '';
    this.authService.login(this.form.getRawValue()).subscribe({
      next: () => this.router.navigate(['/media-items']),
      error: (err: any) => {
        this.errorMessage = err?.error?.message ?? 'Login failed. Please try again.';
      }
    });
  }
}
