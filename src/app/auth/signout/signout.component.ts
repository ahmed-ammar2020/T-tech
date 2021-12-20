import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
})
export class SignoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.signedin$.next(false);
    localStorage.setItem('authenticated', 'false');
    localStorage.removeItem('userRole');
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {}
}
