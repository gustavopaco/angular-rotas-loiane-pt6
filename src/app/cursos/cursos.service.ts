import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: "Angular"},
      {id: 2, nome: "Java"}
    ]
  }

  getCurso(id : Number) {

    let cursos = this.getCursos();
    for (let curso of cursos) {
      if(curso.id == id) {
        return curso;
      }
    }
      return null;
  }
}
