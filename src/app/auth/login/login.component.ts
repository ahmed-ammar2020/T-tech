import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.loginForm.invalid) return;
    const { username, password } = this.loginForm.value;

    for (let user of this.authService.users) {
      if (username === user.username && password === user.password) {
        this.authService.signedin$.next(true);
        localStorage.setItem('authenticated', 'true');
        localStorage.setItem('userRole', user.role);
        const userCharacter = user.username
          .charAt(user.username.length - 1)
          .toLocaleLowerCase();
        this.router.navigateByUrl(`/inbox/${userCharacter}`);
        break;
      }

      this.authService.signedin$.next(false);
      localStorage.setItem('authenticated', 'false');
    }

    this.authService.signedin$.subscribe((authenticated) => {
      if (!authenticated) {
        this.loginForm.setErrors({
          invalidUsernameOPass: true,
        });
      }
    });
  }
}
