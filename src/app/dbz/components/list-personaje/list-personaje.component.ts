import { Component, Input } from '@angular/core';

import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-list-personaje-dbz',
  templateUrl: './list-personaje.component.html',
  styleUrl: './list-personaje.component.css'
})

export class ListPersonajeComponent {


  @Input() // hace la propiedad personajeLista disponible
           //para ser recibida desde otro componente en
           //pocas palabras la exporta hacia otro componente

  public personajeLista: Personaje[] = [

  ];
}
