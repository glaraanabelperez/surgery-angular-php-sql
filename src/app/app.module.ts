import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ServiceGeneral } from './servicios-generales/service-general.service';
import { ServicePedidos } from './servicios-pedidos/service-pedidos.service';
import { ApiDatos } from './models/api-datos.model';

import { AuthService } from './auth-services/auth.service';
import { GuardsGuard } from './guards/usuario-logueado/guards.guard';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent} from './nav/nav.component';
import { CabeceraComponent} from './cabecera/cabecera.component';
import { ListCardComponent} from './lista-card/list-card.component';
import { CardProdComponent} from './card-prod/card-prod.component';

import { HomeComponent } from './home/home.component';

import { LogInComponent } from './log-in/log-in.component';
import { ProtectedComponent } from './protected/protected/protected.component';

import { ListaProdAdmin } from './protected/protected/productos-panel/lista-prod-admin';
import { PublicarInstagram } from './protected/protected/publicarInstagram/publicarInstagram.component';
import { VerPedido } from './list-ver-pedido/ver-pedido.component';
import { NavSecundario } from './nav-secundario/nav-secundario';

export class ObjetoCategoria{
  subscribe(arg0: (categoriaRecibida: any) => any) {
    throw new Error('Method not implemented.');
  }
}

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'list-card', component: ListCardComponent},
  {path: 'card', component: CardProdComponent},
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
    NavSecundario,
    CabeceraComponent,
    ListCardComponent,
    LogInComponent,
    ProtectedComponent,
    ListaProdAdmin,
    PublicarInstagram,
    VerPedido,
    CardProdComponent,
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
  providers: [
    ServiceGeneral, 
    AuthService, 
    GuardsGuard, 
    ServicePedidos,
    ApiDatos ,
    {provide: ObjetoCategoria}
    // {provide: MyFourthClass, useFactory: ...},
    //aca es una prueba rara
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
