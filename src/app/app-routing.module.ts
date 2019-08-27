import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthGuard } from './auth/auth/auth.guard';

const appRoutes: Routes = [
    { 
        path: 'recipes', 
        component: RecipesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', pathMatch: 'full', component: RecipeStartComponent}, // cuando esta vacio
            { path: 'new', component: RecipeEditComponent },
            { 
                path: ':id', 
                component: RecipeDetailComponent,
                resolve: [RecipesResolverService]
            },
            { 
                path: ':id/edit',
                component: RecipeEditComponent,
                resolve: [RecipesResolverService]
            }
        ]
    },

    { path: 'shopping-list', component: ShoppingListComponent},
    { path: 'auth', component: AuthComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'recipes'}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
