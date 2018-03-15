import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  
  hero: Hero = {
    id: 1, 
    name: '',
    age: 23,
    sex: 'female',
  };

  constructor() { }

  ngOnInit() {
  }

}
