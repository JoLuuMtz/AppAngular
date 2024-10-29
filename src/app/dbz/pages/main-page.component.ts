import { Component } from '@angular/core';

import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {

  private readonly _dbzService: DbzService;

  constructor(dbzService: DbzService) {
    this._dbzService = dbzService;
  }

  public personajes: Personaje[] = [];// lo que reecibe el componente hijo ListaPersonajes


  Emitor(persona: Personaje): void {
    // añade un nuevo personaje a la lista
    this.personajes.push(persona);
    // this.personajes = [...this.personajes];

  }
}



