import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorariosComponent } from './horarios/horarios.component';
import { AdministrarMateriasComponent } from './administrar-materias/administrar-materias.component';
import { ConvertidorFechasComponent } from './convertidor-fechas/convertidor-fechas.component';

const routes: Routes = [
  { path: 'horarios', component: HorariosComponent },
  { path: 'administrar-materias', component: AdministrarMateriasComponent },
  { path: 'convertidor-fechas', component: ConvertidorFechasComponent },
  { path: '', redirectTo: '/horarios', pathMatch: 'full' }, // Redirección por defecto a "Horarios"
  { path: '**', redirectTo: '/horarios' } // Redirección para rutas no existentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
