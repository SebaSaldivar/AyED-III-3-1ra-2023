import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from './models/curso';
import { CursoAlphaService } from './services/curso-alpha.service';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor(
    private cursoService: CursoService,
    private router: Router
  ){

  } 

  redigirInicio(){
  this.router.navigate(['inicio', { mensaje: 'Hola', usuario: '3°1ra!' }]);

  //this.router.navigate(['inicio']);
  /* const mensaje = 'Hola';
  const usuario = '3°1ra!';
  const miVariable = 42;
  const miArray = [1, 2, 3];

  this.router.navigate(['inicio'], { queryParams: { mensaje, usuario, miVariable, miArray } }); */
}
}
