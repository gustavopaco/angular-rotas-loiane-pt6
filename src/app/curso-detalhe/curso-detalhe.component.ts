import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {CursosService} from "../cursos/cursos.service";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: Number = 0;
  curso: any;
  inscricao: Subscription;

  /* IMPORTANT: ActivatedRoute, responsavel por detectar quando a rota desse componente esta ativa e receber parametros via Path na URL => usuario/1 */
  constructor(private route: ActivatedRoute, private cursosService: CursosService, private router: Router) {
    this.inscricao = new Subscription();
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.id = this.route.snapshot.paramMap.get("id");
    // this.id = this.route.snapshot.params.id;
    this.inscricao = this.route.params.subscribe((response : any) => {
      this.id = response["id"];
      this.curso = this.cursosService.getCurso(this.id)
      if (this.curso === null) {
        this.router.navigate(["/naoEncontrado"])
      }
    })

  }

  /* IMPORTANT: Como boa pratica, deve-se criar uma variavel do tipo Subscription para receber a chamada do subscribe (de um servico por exemplo)
        e implementar a interface do componente (*OnDestroy), e remover a inscricao*/
  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }
}
