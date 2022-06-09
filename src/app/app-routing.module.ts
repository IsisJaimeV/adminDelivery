import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
