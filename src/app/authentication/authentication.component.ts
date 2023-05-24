import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'Authentication';
}
