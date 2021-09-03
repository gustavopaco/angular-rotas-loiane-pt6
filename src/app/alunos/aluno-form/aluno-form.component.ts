import {Component, OnInit} from '@angular/core';
import {AlunosService} from "../alunos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  aluno: any = {};
  inscricao: Subscription
  private formMudou: boolean = false;

  constructor(private alunosService: AlunosService, private route: ActivatedRoute, private router: Router) {
    this.inscricao = new Subscription();
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(response => {
      let id = response["id"];
      this.aluno = this.alunosService.getAluno(id)
    })
  }

  salvarAluno() {
    this.router.navigate(["/alunos"]);
  }

  onInput() {
    this.formMudou = !this.formMudou;
    console.log("Mudou");
  }

  podeMudarRota() {

    if (this.formMudou) {
      if (confirm("Tem certeza que deseja sair dessa pagina")) {
        return true
      }
    }
      return false;
  }
}
