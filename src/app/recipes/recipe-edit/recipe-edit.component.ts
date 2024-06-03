import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeId: number;
  recipeParamObj: Subscription;
  editMode: boolean = false;

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipeParamObj = this.activeRoute.paramMap.subscribe((data) => {
      this.recipeId = +data.get('id');
      this.editMode = data.get('id') != null;
      console.log(this.editMode);
    });
  }

  ngOnDestroy() {
    this.recipeParamObj.unsubscribe();
  }
}
