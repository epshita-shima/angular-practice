import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector:'loginUser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']

})
export class UserLoginComponent {

  constructor(private router: Router) {

  }

  submit(){
    this.router.navigate(['/dashboard']).then(() => {
      window.location.reload();
    });
  }
}
