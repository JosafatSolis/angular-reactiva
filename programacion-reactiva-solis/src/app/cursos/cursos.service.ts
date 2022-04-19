import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CursoItem } from './curso-item';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // Subject con los datos
  private cursos: BehaviorSubject<CursoItem[]> = new BehaviorSubject<CursoItem[]> ([
    {
      id: 1,
      nombre: "Curso de Angular",
      descripcion: "El primer curso de Angular que se da en esta escuela.",
      creditos: 10
    }
  ])

  // Versión de solo lectura
  cursos$ = this.cursos.asObservable();

  constructor() { }

  getAll(): Observable<CursoItem[]> {
    return this.cursos$;
  }

  addCurso(curso: CursoItem) {
    this.cursos.next([...this.cursos.value, curso]);
  }
}
