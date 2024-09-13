import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string[] =
    ['Spiderman',
      'Ironman',
      'Hulk', 'Thor',
      'Capitan America'];

  public heroresBorrados?: string;
  public todosBorrados?: string;


  borrarUltimoHeores(): void {
   this.heroresBorrados = this.heroes.pop()// elimina el ultimo elemento
   if (this.heroes.length === 0) {
     this.todosBorrados = 'Todos los heroes han sido eliminados';
   }

  }

}

