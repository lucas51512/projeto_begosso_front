import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Paginas
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { LoginComponent } from './pages/login/login.component';
import { PontoComponent } from './pages/ponto/ponto.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ReunioesComponent } from './pages/reunioes/reunioes.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

const routes: Routes = [
  {
    path: 'empresa',
    component: EmpresasComponent
  },
  {
    path: 'evento',
    component: EventosComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ponto',
    component: PontoComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'reuniao',
    component: ReunioesComponent
  },
  {
    path: 'servicos',
    component: ServicosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
