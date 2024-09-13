import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  private _nombre: string;
  private _edad: number;
  private _capitalizado: string;
  private _metodo: string;
  public visible = true; // visible es publico

  constructor() {
    this._nombre = 'Spider man ';
    this._edad = 18;
    this._capitalizado = this.nombre;
    this._metodo = 'metodo';
  }
  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get edad(): number {
    return this._edad;
  }

  set edad(value: number) {
    this._edad = value;
  }

  get capitalizado(): string {
    return this._capitalizado;
  }
  set capitalizado(value: string) {
    this._capitalizado = value;
  }

  get metodo(): string {
    return this._metodo;
  }

  set metodo(value: string) {
    this._metodo = value;
  }
  unirNameAndAge(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(nombre: string): void {
    this.nombre = nombre;
  }
  cambiaEdad(edad: number): void {
    //TODO: Cambiar la edad
    this.edad = edad;
  }

  mostrarBoton(): void {
    this.visible = false;
  }
  ocultarBoton(): void {
    this.visible = true;
  }

}
