import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {CursosGuard} from "./guards/cursos.guard";
import {PaginaNaoEncontradaComponent} from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
// import {AlunosGuard} from "./guards/alunos.guard";
// import {AlunosComponent} from "./alunos/alunos.component";
// import {CursosComponent} from "./cursos/cursos.component";
// import {CursoDetalheComponent} from "./cursos/curso-detalhe/curso-detalhe.component";
// import {CursoNaoEncontradoComponent} from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";

const appRoutes: Routes = [
  {path: "cursos", loadChildren: () => import("./cursos/cursos.module").then(mod => mod.CursosModule), canActivate: [AuthGuard], canActivateChild: [CursosGuard], canLoad : [AuthGuard]},
  {path: "alunos", loadChildren: () => import("./alunos/alunos.module").then(mod => mod.AlunosModule), canActivate: [AuthGuard], canLoad : [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "", component: HomeComponent, canActivate:[AuthGuard], canLoad : [AuthGuard]},
  {path: "**", component: PaginaNaoEncontradaComponent /*, canActivate:[AuthGuard], canLoad : [AuthGuard]
    IMPORTANT: Descomentar *(canActivate e canLoad) acima, caso queira que ao tentar acessar URL nao existente redirecione para /login */
  }
  // {path: "cursos", component: CursosComponent},
  // {path: "curso/:id", component: CursoDetalheComponent},
  // {path: "naoEncontrado", component: CursoNaoEncontradoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
