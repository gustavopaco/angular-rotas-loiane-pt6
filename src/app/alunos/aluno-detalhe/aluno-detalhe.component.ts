import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlunosService} from "../alunos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Aluno} from "../../model/aluno";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno = new Aluno();
  inscricao: Subscription;

  constructor(private alunosService: AlunosService, private routes: ActivatedRoute, private router: Router) {
    this.inscricao = new Subscription();
  }

  ngOnInit(): void {
    /* IMPORTANT: Recebendo parametros vindos do Path da Rota e chamando servico de busca de Aluno pelo ID*/
/*    this.inscricao = this.routes.params.subscribe((response : any) => {
      let id = response["id"];
      this.aluno = this.alunosService.getAluno(id)
    })*/

    /* IMPORTANT: Recebendo Objeto Aluno vindo do Guard Resolver antes do componente AlunoDetalheComponent ser renderizado,
         e apos o componente ser inicializado eh passado o objeto data.aluno* que foi setado no alunos/aluno-routing.module.ts
         e so entao ele eh renderizado e os dados do aluno eh colocado em edicao no HTML.
         Obs: o nome da variavel .aluno deve ser o mesmo que esta setado no reolver de alunos/aluno-routing.module.ts*/
    console.log("AlunoDetalheComponent Inicializado!")
    this.inscricao = this.routes.data.subscribe(dados => {
    console.log("AlunoDetalheComponent Dados Setados!")
      this.aluno = dados.aluno;
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  editarAluno() {
    this.router.navigate(["/alunos", this.aluno.id,"editar"])
  }
}
