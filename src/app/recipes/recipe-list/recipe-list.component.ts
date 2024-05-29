import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Chicken', 'Simple Chicken curry', 'https://tinyurl.com/3ychht62'),
    new Recipe('Panner Tikka', 'This is panner Tekka', 'https://tinyurl.com/4wx24b2b'),
    new Recipe('Coconut chicken', 'Chicken with coconut and rice ', 'https://tinyurl.com/yeyw74h9')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
