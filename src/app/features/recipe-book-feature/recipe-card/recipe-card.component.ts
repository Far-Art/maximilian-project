import {Component, OnInit} from '@angular/core';
import {Recipe} from "../models/recipe.model";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  recipe: Recipe;

  constructor() {
  }

  ngOnInit(): void {
  }

}
