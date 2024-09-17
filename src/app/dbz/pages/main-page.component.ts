import { Component, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {

  public personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 9500
    },
    { nombre: 'Vegeta',
    poder: 7500},


  ];






}




