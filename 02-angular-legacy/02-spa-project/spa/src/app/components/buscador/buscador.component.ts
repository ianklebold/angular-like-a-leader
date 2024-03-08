import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import {Heroe} from "../services/heroes.service";
import { HeroesService } from "../services/heroes.service";



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _heroeService: HeroesService) {

    this._activatedRoute.params.subscribe( params => {
      this.heroes = this._heroeService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    } );

  }

  ngOnInit() {}

  verHeroe( i:number ){
    this._router.navigate( ['/heroe',i] );
  }

}
