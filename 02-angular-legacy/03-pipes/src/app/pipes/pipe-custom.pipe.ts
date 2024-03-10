import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCustom'
})
export class PipeCustomPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {

    value = value.toLowerCase();

    //Separamos las palabras
    let nombres = value.split(' ');

    if ( todas ){
      //A cada nombre le pone la primer letra capitalizada
      nombres = nombres.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substring(1);
      } )

    }else {
      //nombres[0][0] significa primera palabra en la primera posicion
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join();
  }

}
