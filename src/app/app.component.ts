import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signedin$ = this.authService.signedin$;
  constructor(private authService: AuthService) {
    if (localStorage.getItem('authenticated')?.startsWith('t')) {
      this.authService.signedin$.next(true);
    } else {
      this.authService.signedin$.next(false);
    }
  }
}
