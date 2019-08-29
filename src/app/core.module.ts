import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Interceptor
import { AuthInterceptorService } from './auth/auth/auth-interceptor.service';

// Services
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';

@NgModule({
    providers: [
        RecipeService,
        ShoppingListService,
        {
            provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceptorService,
            multi: true // para permitir múltiples interceptores.
        } // usar el interceptor
    ]
})
export class CoreModule {

}