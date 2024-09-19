import { Component } from '@angular/core';
import { Alumno } from '../../models';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  inputType = 'password';
  hayError = false;

  conditionExpression: string = 'Pendiente';
  conditionExpression17: string = 'Entregada';

  inputValor = 'Valor por Defecto';

  persona = {
    id: 1,
    nombre: "Alejandro",
    apellido: "Di Stefano",
    email: "alejandro@mil.com"
  }
  price = 9999;

  today = new Date();
  birthday = new Date(1976, 2, 18);

  alumnos: Alumno[] = [
    {
      nombre: 'Alejandro',
      estaAprobado: false,
    },
    {
      nombre: 'Daniel',
      estaAprobado: true,
    },
    {
      nombre: 'Barby',
      estaAprobado: true,
    },
  ];

  frutas = ['Banana', 'Manzana', 'Pera'];
  mostrarParrafo = true;
  noMostrarParrafo = false;
  alternarInputType():void {
    if(this.inputType === 'password') {
      this.inputType = 'text'
    } else {
      this.inputType = 'password'
    }
  }
}
