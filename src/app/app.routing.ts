import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {CursosComponent} from "./cursos/cursos.component";
import {ModuleWithProviders} from "@angular/core";
import {CursoDetalheComponent} from "./curso-detalhe/curso-detalhe.component";
import {CursoNaoEncontradoComponent} from "./curso-nao-encontrado/curso-nao-encontrado.component";

const AppRouting: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "cursos", component: CursosComponent},
  {path: "curso/:id", component: CursoDetalheComponent},
  {path: "naoEncontrado", component: CursoNaoEncontradoComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(AppRouting);
