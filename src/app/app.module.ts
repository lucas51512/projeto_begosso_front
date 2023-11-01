import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReunioesComponent } from './pages/reunioes/reunioes.component';
import { PontoComponent } from './pages/ponto/ponto.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReunioesComponent,
    PontoComponent,
    ServicosComponent,
    EventosComponent,
    EmpresasComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
