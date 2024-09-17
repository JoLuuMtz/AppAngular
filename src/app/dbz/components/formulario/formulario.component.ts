import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-dbz',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {

  private  _nombre:string = "";

  public get Nombre(): string {
    return this._nombre;
  }
  public set Nombre(value: string) {
    this._nombre = value;
  }



}

