import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.scss'
})
export class ListaAlumnosComponent {

  @Input() alumnos: string[] = [];
  @Output() eliminarAlumno = new EventEmitter<{
    index: number;
    nombre: string;
  }>();

}
