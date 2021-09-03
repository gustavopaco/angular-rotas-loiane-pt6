import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {IFormDeactivated} from "./iform-deactivated";

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivatedGuard implements CanDeactivate<IFormDeactivated> {
  canDeactivate(
    component: IFormDeactivated,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("Guarda de desativacao");
    return component.podeDesativar();
  }

}
