import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // obtenemos una data desde afuera
  @Input() recipe: Recipe;
  @Input() index: number;
  // Obtenemos un evento de tipo función sin retorno desde afuera
  // @Output() recipeSelected = new EventEmitter<void>();


  ngOnInit() {
  }


}
