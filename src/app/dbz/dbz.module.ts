import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListPersonajeComponent } from './components/list-personaje/list-personaje.component';
import { FormularioComponent } from './components/formulario/formulario.component';




@NgModule({
  declarations: [
    MainPageComponent,// componentes declarados de mi modulo bdz
    ListPersonajeComponent,
    FormularioComponent


  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ // aqui van los componentes de mi modulo

    MainPageComponent, // el unico que se exporta es el
    //main-page porque contiene los demas componentes

    FormularioComponent

  ]
})
export class DbzModule { }
