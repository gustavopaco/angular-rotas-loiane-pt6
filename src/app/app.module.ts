import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing.module";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import {AlunosModule} from "./alunos/alunos.module";
// import {CursosModule} from "./cursos/cursos.module";
// import {routing} from "./app.routing";
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    // CursosModule,
    // AlunosModule
    // routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
