import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';

import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ComprasComponent } from './compras/compras.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InfoMarcaComponent } from './info-marca/info-marca.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactenosComponent,
    LoginComponent,
    PrincipalComponent,
    RegistroComponent,
    ProductosComponent,
    PerfilComponent,
    ComprasComponent,
    CarritoComponent,
    InfoMarcaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
