import {Component, EventEmitter, Inject, Injectable, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientpageComponent} from "../clientpage/clientpage.component";

import axios from "axios";
import {FormControl} from "@angular/forms";

import {Observable} from "rxjs";

import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-login',
  templateUrl:  './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({providedIn: 'root'})
export class LoginComponent implements OnInit {

  routing: Router;
  route: ActivatedRoute;
  doctorCheck: boolean = false;
  pass: any;
  login: any;
  private myapp: any;
  constructor(@Inject(Router) router: Router, @Inject(ActivatedRoute) route: ActivatedRoute) {
    this.routing = router;
    this.route = route;
  }
  onLogin() {

  }

  constructor1(myapp: ClientpageComponent) {
 }

  saveloc(){
    this.myapp.saveloc();
  }



  LoginBtn() {
    const config = {
      url: 'http://localhost:8081/user/login',

    };
    const data = {
      login: this.login,
      password: this.pass,
      manager:this.doctorCheck
    }
    axios.post(config.url, data, { headers: { 'x-mock-match-request-body': true } })
      .then((response) => {
        console.log(response);
        if (response.data.code == 1) {
          alert('Успешно!');
          this.routing.navigate(['client'])

        }
        if (response.data.code == 2) {
          alert('Успешно!');
          this.routing.navigate(['manager'])
        }
        if (response.data.code == 3) {
          alert('Проверьте данные');

        }
      })
      .catch((error) => {
        console.log(error);
        alert('Неверный логин или пароль!');
      });
  }

  ngOnInit(): void {
  }
}
