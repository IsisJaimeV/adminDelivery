import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { NavComponent } from './common/nav/nav.component';
import { HeaderComponent } from './common/header/header.component';
import { FiltroComponent } from './common/filtro/filtro.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NotFoundComponent,
    NavComponent,
    HeaderComponent,
    FiltroComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
