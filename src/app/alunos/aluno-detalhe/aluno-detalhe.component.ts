import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlunosService} from "../alunos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any = {};
  inscricao: Subscription;

  constructor(private alunosService: AlunosService, private routes: ActivatedRoute, private router: Router) {
    this.inscricao = new Subscription();
  }

  ngOnInit(): void {
    this.inscricao = this.routes.params.subscribe((response : any) => {
      let id = response["id"];
      this.aluno = this.alunosService.getAluno(id)
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  editarAluno() {
    this.router.navigate(["/alunos", this.aluno.id,"editar"])
  }
}
