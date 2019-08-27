import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({
    providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{

    constructor(private dataStorageService: DataStorageService,
                private recipesService: RecipeService) {}
    
    // podemos utilizar un guard o un Resolve
    // un resolve -> Un resultado es esencialmente un código que se ejecuta antes de cargar 
    // una ruta para garantizar que ciertos datos.
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipesService.getRecipes();

        if(recipes.length === 0){
            return this.dataStorageService.fetchRecipes();
        }else {
            return recipes;
        }
    }
}