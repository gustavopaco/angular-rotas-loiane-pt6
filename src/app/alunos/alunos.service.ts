import { Injectable } from '@angular/core';
import {Aluno} from "../model/aluno";

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: "Gustavo", email: "gustavopaco@gmail.com"},
    {id: 2, nome: "Augusto", email: "augusto16@gmail.com"},
    {id: 3, nome: "Flavia", email: "flavia@gmail.com"}
  ]

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id : Number) {
    const alunos = this.getAlunos();

    for (let aluno of alunos) {
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }
}
