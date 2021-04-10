import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from '../app/core/core.module';

import { ServiceGeneral } from './core/servicios-generales/service-general.service';
import { ServicePedidos } from './core/servicios-pedidos/service-pedidos.service';

import { AuthService } from './auth-services/auth.service';
import { GuardsGuard } from './guards/usuario-logueado/guards.guard';

import { AppComponent } from './app.component';
import { NavComponent} from './publicComponent/nav/nav.component';
import { CabeceraComponent} from './publicComponent/cabecera/cabecera.component';
import { ListCardComponent} from './publicComponent/lista-card/list-card.component';
import { CardProdComponent} from './publicComponent/card-prod/card-prod.component';

import { HomeComponent } from './publicComponent/home/home.component';

import { LogInComponent } from './publicComponent/log-in/log-in.component';
import { ProtectedComponent } from './protected/protected/protected.component';

import { ListaProdAdmin } from './protected/protected/productos-panel/lista-prod-admin';
import { PublicarInstagram } from './protected/protected/publicarInstagram/publicarInstagram.component';
import { VerPedido } from './publicComponent/list-ver-pedido/ver-pedido.component';
import { NavSecundario } from './publicComponent/nav-secundario/nav-secundario';
import { from } from 'rxjs';


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
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  exports: [
    AppComponent,
    ],

  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA, 
  ],
  providers: [
    ServiceGeneral, 
    AuthService, 
    GuardsGuard, 
    ServicePedidos,
  ],
  bootstrap: [
    AppComponent
  ],

})
export class AppModule { }
