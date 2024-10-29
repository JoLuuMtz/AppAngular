import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personaje } from '../../interfaces/personaje.interface';


@Component({
  selector: 'app-formulario-dbz',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {

  // objeto que recibira el

  // @Output() Emitidor: EventEmitter<Personaje> = new EventEmitter<Personaje>();
  @Output("Emitor") Emitidor = new EventEmitter<Personaje>();

  public nuevoPersonaje: Personaje =
    {
      nombre: "",
      poder: 0
    };

  Submit(): void {

    // Muestra el objeto que se esta enviando
    console.log(this.nuevoPersonaje);

    // si el nombre del personaje es vacio no se emitira el evento
    if (this.nuevoPersonaje.nombre.length === 0)
      return alert('El nombre no puede estar vacio');

    // emite el evento
    this.Emitidor.emit(this.nuevoPersonaje);

    // Obtiene los personajes almacenados en localStorage
    const personajes = JSON.parse(localStorage.getItem('personajes') || '[]');

    // Añade el nuevo personaje al array
    personajes.push(this.nuevoPersonaje);

    // Guarda el array actualizado en localStorage
    localStorage.setItem('personajes', JSON.stringify(personajes));


    // reinicia los valores del formulario
    this.nuevoPersonaje = { nombre: "", poder: 0 };



  }

}

