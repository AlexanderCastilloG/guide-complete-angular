import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: '/recipes'},
    // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}
    { 
        path: 'recipes', 
        loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
    },
    { 
        path: 'shopping-list',
        loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth/auth.module').then(m => m.AuthModule)
    },
    // Ruta para manejar si no encuentra ninguna ruta
    // { path: '**', component: Custom404PageComponente}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
