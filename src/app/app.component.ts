import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-rotas-loiane-pt6';
  cursoID: string = "";
  mostrarMenu: boolean = false;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.mostrarMenuEmitter.subscribe(response => this.mostrarMenu = response);
  }
}
