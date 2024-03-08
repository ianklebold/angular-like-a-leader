import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Heroe} from "../services/heroes.service";
import { Router } from "@angular/router"


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent implements OnInit {

  @Input()
  heroe:Heroe;

  @Input()
  id:number;

  @Output()
  heroeSeleccionado: EventEmitter<number>;

  constructor(private _router:Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
      this.heroeSeleccionado.emit(this.id);
  }
}
