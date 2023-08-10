import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {data} from "autoprefixer";
import axios from "axios";
import {MatDatepicker} from "@angular/material/datepicker";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  router: Router;
  login: any;
  password: any;
  secondName: any;
  name: any;
  email: any;

  constructor(@Inject(Router) router: Router) {
    this.router = router;
  }
  OnDateChange(date: unknown) {}

  async RegisterBtn() {
    const config = {
      url: 'http://localhost:8081/user/register',
    };

    const data = {
      login: this.login,
      password: this.password,
      secondName: this.secondName,
      name:this.name,
      email:this.email,
    }
    axios.post(config.url, data, { headers: { 'x-mock-match-request-body': true } })
      .then((response) => {
        console.log(response);
        if (response.data.code == 1) {
          alert('Успешно!');
        }
        if (response.data.code == 2) {
          alert('Логин или email заняты!');

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
