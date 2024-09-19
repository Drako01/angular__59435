import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  inputType = 'password';
  hayError = false;
  persona = {
    id: 1,
    nombre: "Alejandro",
    apellido: "Di Stefano",
    email: "alejandro@mil.com"
  }

  alternarInputType():void {
    if(this.inputType === 'password') {
      this.inputType = 'text'
    } else {
      this.inputType = 'password'
    }
  }
}
