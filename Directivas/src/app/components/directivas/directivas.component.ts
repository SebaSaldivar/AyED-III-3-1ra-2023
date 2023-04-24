import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  nombre = "Soy componente";
  numero = 8;
  cantAlumnos : number = 15;

  estudianteActual : Estudiante = {
    legajo : 7965,
    nombre : 'Jose Maria',
    apellido : 'Herrera',
    carrera : 'React',
    regular : true,
    fecha_inscripcion : new Date(2022, 3, 22)
  }

  listaEstudiantes: Estudiante[] = [
    { 
      legajo : 1234,
      nombre : 'Juan Carlos',
      apellido : 'Gutierrez',
      carrera : 'Angular',
      regular : true,
      fecha_inscripcion : new Date(2022, 2, 25)
    },
    { 
      legajo : 3568,
      nombre : 'Felipe Luis',
      apellido : 'Gómez',
      carrera : 'Java',
      regular : false,
      fecha_inscripcion : new Date(2022, 3, 25)
    },
    { 
      legajo : 4778,
      nombre : 'Marcela ',
      apellido : 'Diaz Lopez',
      carrera : 'Javascript',
      regular : true,
      fecha_inscripcion : new Date(2022, 3, 10)
    },
  ]

}
