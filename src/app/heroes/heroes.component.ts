import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = [];

    return this.rest.getHeroes().subscribe((data: {}) => {
      console.log(data);
      this.heroes = data;
    });
  }

}
