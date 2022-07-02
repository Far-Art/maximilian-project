import { Component, OnInit } from '@angular/core';
import {Recipe} from "../models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [{name:"Warm Okra, Tomato and Bacon Salad", description:'This warm salad can be served as a main dish; just pair with crusty bread.',imagePath:'https://www.washingtonpost.com/resizer/HtjnxemQKS0KnbDtLvTdlhkXo6c=/arc-anglerfish-washpost-prod-washpost/public/BGNXJ4GWZQI6ZPQXFBQWJF2MKQ.jpg'}];

  constructor() { }

  ngOnInit(): void {
  }

}
