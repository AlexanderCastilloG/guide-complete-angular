import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot)
        : boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
            
            return this.authService.user.pipe(
                // take ->evitamos los errores desagradables que podrían ocurrir 
                //debido a la repetición de la ejecución de un  BehaviorSubject ó Subject
                take(1),
                map(user => {
                    // cualquier cosa que no sea nula o indefinida es verdadera.
                    // return !!user;  // !user ? false : true == !!user
                    const isAuht = !!user;
                    if(isAuht) {
                        return true;
                    }
                    // createUrlTree -> es milimar al navigation, maneja un árbol de rutas
                    return this.router.createUrlTree(['auth']);
                }), 
                // tap(isAuth => {
                //     if(!isAuth) {
                //         this.router.navigate(['/auth']);
                //     }
                // })
            );
        }
}