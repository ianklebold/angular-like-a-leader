import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Heroe, HeroesService} from '../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe : Heroe;

  constructor( private _activatedRoute: ActivatedRoute,
               private _heroeService: HeroesService) {

    this._activatedRoute.params.subscribe( params => {
      this.heroe = this._heroeService.getHeroe(params['id']); // /heroe/:id
    } );

  }

  ngOnInit() {
  }

  getCompanyComic(){
      if (this.heroe.casa.toUpperCase() == 'MARVEL'){
          return '../../assets/img/Marvel-logo.svg.png';
      }else {
          return '../../assets/img/DC_logo.svg.png';
      }
  }

}


