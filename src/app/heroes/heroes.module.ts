import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";


@NgModule({
declarations: [ // declara los componente que se van a utilizar en todo el scope del modulo personalizado
  HeroComponent,
  ListComponent
],
exports: [ //exporta lo componentes para usarlos en el exterior
  HeroComponent,
  ListComponent,
],
imports: [ // importa los modulos necesarios en mi modulo personalizado
  CommonModule
]
})

export class HeroesModule {}
