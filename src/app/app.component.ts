import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  // esto es un modulo que se exporta
  // con el conjunto de componente
  public title: string = 'Primera app angular';
  public descripcion: string = 'Estoy aprendiendo angular xd ';
  isVisible = true;

  public counter: number = 0;


  constructor(private router: Router) { } // inyeccion de dependencias

  mostrarNombre(name: string): string {
    return name;
  }


  irAtareas() { // ruta tarea
    this.router.navigate(['/tareas']);

  }
  contar(): void {
    this.counter += 1;
  }
  restar(): void {
    this.counter -= 1;
  }
  reset(): void {
    this.counter = 0;
  }

}




