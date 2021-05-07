import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  welcomeornot = "";

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.username == "FDMUser" && this.password == "1234"){
      this.welcomeornot = "Welcome User";
      console.log(this.welcomeornot);
    }else {
      this.welcomeornot = "wrong username/password"
      console.log(this.welcomeornot);
    }
  }
}
