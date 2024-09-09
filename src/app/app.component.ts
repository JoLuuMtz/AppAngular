import { Component } from '@angular/core';

@Component({ //  componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { // esto es un modulo que se exporta
                            // con el conjunto de componente
  public title:string = 'Primera app angular';
  public descripcion:string = 'Estoy aprendiendo angular xd ';

  mostrarNombre(nombre: string): string{
    return nombre;
  }
}

