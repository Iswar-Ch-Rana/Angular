import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  recipeId: number;
  paramMapObjs: Subscription;

  constructor(private recipeService: RecipeService, private activeRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.paramMapObjs = this.activeRoute.paramMap.subscribe((data) => {
      this.recipeId = +data.get('id');
      this.recipe = this.recipeService.getRecipeById(this.recipeId);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }

  onEditRecipe() {
    console.log(this.activeRoute)
    this.router.navigate(['edit'], {relativeTo: this.activeRoute})
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy() {
    this.paramMapObjs.unsubscribe();
  }
}
