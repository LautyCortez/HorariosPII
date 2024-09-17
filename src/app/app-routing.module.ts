import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorarioGrillaComponent } from './components/horario-grilla/horario-grilla.component';
import { ConvertidorFechasComponent } from './components/convertidor-fechas/convertidor-fechas.component';
import { AgregarHorarioComponent } from './components/agregar-horario/agregar-horario.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { LautaroGuard } from './lautaro.guard';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: HorariosComponent },
  { path: 'horario-grilla', component: HorarioGrillaComponent },
  { path: 'horario', component: HorariosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'agregar-horario', component: AgregarHorarioComponent },
  { path: 'convertidor-fechas', component: ConvertidorFechasComponent },
  { path: '', redirectTo: '/horario', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
