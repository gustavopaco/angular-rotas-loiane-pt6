import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CursosComponent} from "./cursos.component";
import {CursoDetalheComponent} from "./curso-detalhe/curso-detalhe.component";
import {CursoNaoEncontradoComponent} from "./curso-nao-encontrado/curso-nao-encontrado.component";
import {FormsModule} from "@angular/forms";
import {CursosRoutingModule} from "./cursos.routing.module";
// import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
    // RouterModule,
  ],
  exports: [
  ]
})
export class CursosModule {
}
