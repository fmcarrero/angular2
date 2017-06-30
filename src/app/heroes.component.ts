import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from "@angular/router/src";



@Component({
  providers: [HeroService],
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent   implements OnInit  {   

  title = 'Tour of Heroues';
  heroes: Hero[];
  selectedHero: Hero; 
  constructor(
     private heroService: HeroService,
     private router: Router
    ) { }  
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }   
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

 }
 
