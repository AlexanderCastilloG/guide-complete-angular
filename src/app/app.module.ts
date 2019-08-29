import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Import Component
import { HeaderComponent } from './header/header.component';

// Routes Module Root
import { AppRoutingModule } from './app-routing.module';

// Modules Components
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule, // SharedModule ->componente de Shared
    CoreModule, //CoreModule -> Providers de la aplicacón e Interceptores
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
