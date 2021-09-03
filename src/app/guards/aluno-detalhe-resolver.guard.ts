import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Aluno} from "../model/aluno";
import {AlunosService} from "../alunos/alunos.service";

@Injectable({
  providedIn: 'root'
})
export class AlunoDetalheResolverGuard implements Resolve<Aluno> {

  constructor(private alunosService: AlunosService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    console.log("Guarda AlunoResolver Ativado!")
    let id = route.params["id"];
    return this.alunosService.getAluno(id);

  }
}
