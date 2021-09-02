import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  id: string | null = "";

  /* IMPORTANT: ActivatedRoute, responsavel por detectar quando a rota desse componente esta ativa e receber parametros via Path na URL => usuario/1 */
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.id = this.route.snapshot.paramMap.get("id");
    // this.id = this.route.snapshot.params.id;
  }

}
