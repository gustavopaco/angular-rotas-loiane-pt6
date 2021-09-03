import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class CursosGuard implements CanActivateChild {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.loginService.isUsuarioAutenticado()) {
      console.log("Guarda de rota filha cursos Ativada")
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
