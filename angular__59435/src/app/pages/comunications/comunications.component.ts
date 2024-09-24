import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ListaAlumnosComponent } from '../../components/lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-comunications',
  templateUrl: './comunications.component.html',
  styleUrl: './comunications.component.scss',
})
export class ComunicationsComponent implements AfterViewInit {
  alumnosAprobados = ['Alejandro', 'Barby'];
  alumnosDesaprobados = ['Fede', 'Lola'];

  @ViewChild('myBotton') myBottonRef?: ElementRef<HTMLButtonElement>;
  @ViewChild(ListaAlumnosComponent) ListaAlumnosComponentRef?: ListaAlumnosComponent;

  constructor() {
    console.log(this.myBottonRef, ListaAlumnosComponent);
  }

  modalVisible = false;
  // Nueva función para manejar la eliminación de alumnos
  onEliminarAlumno(index: number, from: 'aprobados' | 'desaprobados') {
    if (from === 'aprobados') {
      this.alumnosAprobados = this.alumnosAprobados.filter((_, i) => index !== i);
    } else {
      this.alumnosDesaprobados = this.alumnosDesaprobados.filter((_, i) => index !== i);
    }
  }
  ngAfterViewInit(): void{
    console.log(this.myBottonRef, ListaAlumnosComponent);
  }
}
