import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ // aqui van los componentes de mi modulo

    MainPageComponent
     


  ]
})
export class DbzModule { }
