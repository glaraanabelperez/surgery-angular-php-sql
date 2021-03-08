import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent} from './nav/nav.component';
import { CabeceraComponent} from './cabecera/cabecera.component';
import { ListCardComponent} from './lista-card/list-card.component';
import { HomeComponent } from './home/home.component';

import { ServiceCategorias } from './protected/servicios-categorias/service-categroias.service';
import { ServiceGeneral } from './servicios-generales/service-general.service';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component';
import { ProtectedComponent } from './protected/protected/protected.component';
import { AuthService } from './auth-services/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from './guards/usuario-logueado/guards.guard';
import { ListaProdAdmin } from './protected/protected/productos-panel/lista-prod-admin';
import { PublicarInstagram } from './protected/protected/publicarInstagram/publicarInstagram.component';
import { ServicePedidos } from './servicios-pedidos/service-pedidos.service';
import { VerPedido } from './list-ver-pedido/ver-pedido.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'list-card', component: ListCardComponent},
  {path: 'login', component:LogInComponent},
  {path: 'pedidos', component:VerPedido},


  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [GuardsGuard]
  },
  {
    path: 'descargar', 
    component:PublicarInstagram,
    canActivate: [GuardsGuard]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CabeceraComponent,
    ListCardComponent,
    LogInComponent,
    ProtectedComponent,
    ListaProdAdmin,
    PublicarInstagram,
    VerPedido
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ServiceGeneral, AuthService, GuardsGuard, ServiceCategorias, ServicePedidos],
  bootstrap: [AppComponent]
})
export class AppModule { }
