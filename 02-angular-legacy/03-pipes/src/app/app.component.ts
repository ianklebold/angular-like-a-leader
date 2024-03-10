import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Ian Fernandez';
  nombre2 = 'iAn fErNanDEz';


  PI: number = Math.PI;
  porcentaje : number = 0.234;
  salario : number = 1234.5;
  fecha : Date = new Date();
  videoUrl : string = "https://www.youtube.com/embed/-CBKW-90VxQ?si=isKgdYvt70oR7iJX";

  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout( () => {
      resolve('llego la data');
    },4500);

  } );

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

}
