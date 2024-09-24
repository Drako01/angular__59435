import { Component } from '@angular/core';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '1er App en Angular';
  nombre = 'Alejandro';
  persona = {
    id: 1,
    nombre: "Alejandro",
    email: "alejandro@mil.com"
  }

}
