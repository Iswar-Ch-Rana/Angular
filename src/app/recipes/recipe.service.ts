import {Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shoppting-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('Chicken', 'Simple Chicken curry', 'https://tinyurl.com/3ychht62', [
  //     new Ingredient('Chicken', 1),
  //     new Ingredient('Potato', 2)
  //   ]),
  //   new Recipe('Panner Tikka', 'This is panner Tekka', 'https://tinyurl.com/4wx24b2b', [
  //     new Ingredient('Panner', 10),
  //     new Ingredient('Butter', 1)
  //   ]),
  //   new Recipe('Coconut chicken', 'Chicken with coconut and rice ', 'https://tinyurl.com/yeyw74h9', [
  //     new Ingredient('Chicken', 1),
  //     new Ingredient('Coconut', 1)
  //   ])
  // ];
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipeById(id: number) {
    return this.recipes.slice()[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
