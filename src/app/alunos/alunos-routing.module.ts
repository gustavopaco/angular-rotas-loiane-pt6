import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlunosComponent} from "./alunos.component";
import {AlunoDetalheComponent} from "./aluno-detalhe/aluno-detalhe.component";
import {AlunoFormComponent} from "./aluno-form/aluno-form.component";
import {AlunosGuard} from "../guards/alunos.guard";
import {AlunosDeactivatedGuard} from "../guards/alunos-deactivated.guard";
import {AlunoDetalheResolverGuard} from "../guards/aluno-detalhe-resolver.guard";

const alunosRoutes: Routes = [
  {path: "", component: AlunosComponent , canActivateChild: [AlunosGuard], children: [
      {path: "novo", component: AlunoFormComponent, canDeactivate: [AlunosDeactivatedGuard]},
      {path: ":id", component: AlunoDetalheComponent, resolve: { aluno : AlunoDetalheResolverGuard }},
      {path: ":id/editar", component: AlunoFormComponent, canDeactivate: [AlunosDeactivatedGuard]},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
