import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signedin$ = new BehaviorSubject(null);
  users = [
    {
      username: 'userA',
      password: 'userA',
      role: 'Admin',
    },
    {
      username: 'userB',
      password: 'userB',
      role: 'Editor',
    },
    {
      username: 'userC',
      password: 'userC',
      role: 'Guest',
    },
  ];
  constructor() {}
}
