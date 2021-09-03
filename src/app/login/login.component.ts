import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {Usuario} from "../model/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.usuario);
  }
}
