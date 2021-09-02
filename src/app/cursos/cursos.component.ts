import {Component, OnDestroy, OnInit} from '@angular/core';
import {CursosService} from "./cursos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any;
  page: Number | any
  inscricao: Subscription

  constructor(private cursosService: CursosService, private route: ActivatedRoute, private router: Router) {
    this.inscricao = new Subscription();
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    /* IMPORTANT: Extraindo parametro QUERY vindo da url => "?pagina=this.page"*/
    this.inscricao = this.route.queryParams.subscribe(response => this.page = response["pagina"]);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  nextPage() {

    /* IMPORTANT: Navegando para a rota QUERY => "locahost:4200/cursos?pagina=this.page"*/
    this.router.navigate(["/cursos"], {queryParams: {"pagina": ++this.page}})

    /* IMPORTANT: Navegando para a rota PATH => "locahost:4200/cursos/this.page"*/
    // this.router.navigate(["/curso/", ++this.page])
  }
}
