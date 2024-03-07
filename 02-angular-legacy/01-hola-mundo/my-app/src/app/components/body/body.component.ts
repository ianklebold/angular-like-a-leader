import { Component } from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent{

  mostrar = true;

  personajes: string[] = ['Spiderman','Venom','Dr. Octopus'];

  frase: any = {
    mensaje: 'Estoy vencido pero no me doy por vencido',
    autor: 'Ian Fernandez'
  }
}
