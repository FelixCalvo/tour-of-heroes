import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
//@Input() es un decorador de Angular que indica que la propiedad hero es una entrada de datos que será proporcionada por un componente padre. 
//en este caso es cuando se clica un boton (heroes.component.html)
  @Input() hero?: Hero;
}


