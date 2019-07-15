import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(
      private zone: NgZone,
      private router: Router) {
  }

  ngOnInit() {
    console.log('Login page');
  }

  signIn() {
    this.zone.run(() => this.router.navigate(['/home']));
  }

}
