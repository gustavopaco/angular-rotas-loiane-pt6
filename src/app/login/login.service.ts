import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from "../usuario/usuario";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  email = "gustavopaco@gmail.com";
  password = "123"
  usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  login(usuario: Usuario) {
    if (usuario.email === this.email && usuario.password === this.password) {

      console.log("Logado");
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(["/"]);
    } else {
      console.log("Erro ao logar");
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  isUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }
}
