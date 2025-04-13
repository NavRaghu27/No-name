import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [NgClass, NgIf, ReactiveFormsModule],
  styles: ``
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  submitted = false;
  loading = false;
  error = '';
  showPassword = false;
  currentYear = new Date().getFullYear();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });

    // Check for remembered email
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      this.loginForm.patchValue({
        email: rememberedEmail,
        rememberMe: true
      });
    }
  }

  // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.submitted = true;
    this.error = '';

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // Handle remember me
    if (this.loginForm.value.rememberMe) {
      localStorage.setItem('rememberedEmail', this.loginForm.value.email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    // Call authentication service
    // this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
    //   .subscribe({
    //     next: () => {
    //       this.router.navigate(['/dashboard']);
    //     },
    //     error: (error: any) => {
    //       this.error = error.message || 'Login failed. Please try again.';
    //       this.loading = false;
    //     }
    //   });
  }
}