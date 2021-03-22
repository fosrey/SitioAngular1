import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero={
    id: 1,
    name: 'Spiderman',
    edad: 23,
    poder: 'Telarañas, Sentido Aracnido',
    universo: 'Marvel',
    identidad: 'Pedro Parque'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
