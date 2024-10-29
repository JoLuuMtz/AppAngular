import { Component, Input } from '@angular/core';

import { Personaje } from '../../interfaces/personaje.interface';
import { ListComponent } from '../../../heroes/components/list/list.component';

@Component({
  selector: 'app-list-personaje-dbz',
  templateUrl: './list-personaje.component.html',
  styleUrl: './list-personaje.component.css'
})


export class ListPersonajeComponent {

  // decorador que permite recibir datos desde algun componente padre
  @Input('ListaComponentInput')

  // recibe la lista depersonajes desde el componente
   // padre main-page
  public personajeLista: Personaje[] = [];




  // eliminar un personaje de la lista
  DeletePersonaje(index: number): void {
    // elimina el personaje de la lista de 1 en 1 y le
    // signa el nuevo valor a la lista
    this.personajeLista.splice(index, 1);

    // elimina en el localStorage el personaje
    localStorage.removeItem('personajes');


  }


}



