import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shoppting-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Chicken', 'Simple Chicken curry', 'https://tinyurl.com/3ychht62', [
      new Ingredient('Chicken', 1),
      new Ingredient('Potato', 2)
    ]),
    new Recipe('Panner Tikka', 'This is panner Tekka', 'https://tinyurl.com/4wx24b2b', [
      new Ingredient('Panner', 10),
      new Ingredient('Butter', 1)
    ]),
    new Recipe('Coconut chicken', 'Chicken with coconut and rice ', 'https://tinyurl.com/yeyw74h9', [
      new Ingredient('Chicken', 1),
      new Ingredient('Coconut', 1)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
