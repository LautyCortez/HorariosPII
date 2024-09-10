import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorarioGrillaComponent } from './components/horario-grilla/horario-grilla.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { AdministrarMateriasComponent } from './components/administrar-materias/administrar-materias.component';
import { ConvertidorFechasComponent } from './components/convertidor-fechas/convertidor-fechas.component';
import { AgregarHorarioComponent } from './components/agregar-horario/agregar-horario.component';


const routes: Routes = [
  { path: 'horarios', component: HorariosComponent },
  { path: 'horarios', component: HorarioGrillaComponent },
  { path: 'administrar-materias', component: AdministrarMateriasComponent },
  { path: 'agregar-horario', component: AgregarHorarioComponent},
  { path: 'convertidor-fechas', component: ConvertidorFechasComponent },
  { path: '', redirectTo: '/horarios', pathMatch: 'full' },
  { path: '**', redirectTo: '/horarios' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
