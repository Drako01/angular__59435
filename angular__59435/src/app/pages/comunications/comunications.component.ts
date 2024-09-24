import { Component } from '@angular/core';

@Component({
  selector: 'app-comunications',
  templateUrl: './comunications.component.html',
  styleUrl: './comunications.component.scss',
})
export class ComunicationsComponent {
  alumnosAprobados = ['Alejandro', 'Barby'];
  alumnosDesaprobados = ['Fede', 'Lola'];

  // Nueva función para manejar la eliminación de alumnos
  onEliminarAlumno(index: number, from: 'aprobados' | 'desaprobados') {
    if (from === 'aprobados') {
      this.alumnosAprobados = this.alumnosAprobados.filter((_, i) => index !== i);
    } else {
      this.alumnosDesaprobados = this.alumnosDesaprobados.filter((_, i) => index !== i);
    }
  }
}
