 import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
 import {LoginService} from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.loginService.isUsuarioAutenticado()) {
      console.log("Guarda rota filha alunos Ativada!")
      // console.log(childRoute)
      // console.log(state)
      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }

}
