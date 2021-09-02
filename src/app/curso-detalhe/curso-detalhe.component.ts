import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: string | null = "";
  inscricao: Subscription;

  /* IMPORTANT: ActivatedRoute, responsavel por detectar quando a rota desse componente esta ativa e receber parametros via Path na URL => usuario/1 */
  constructor(private route: ActivatedRoute) {
    this.inscricao = new Subscription();
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.id = this.route.snapshot.paramMap.get("id");
    // this.id = this.route.snapshot.params.id;
    this.inscricao = this.route.params.subscribe((response : any) => this.id = response["id"])
  }

  /* IMPORTANT: Como boa pratica, deve-se criar uma variavel do tipo Subscription para receber a chamada do subscribe (de um servico por exemplo)
        e implementar a interface do componente (*OnDestroy), e remover a inscricao*/
  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }
}
