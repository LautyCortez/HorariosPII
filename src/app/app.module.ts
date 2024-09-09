import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { HorarioGrillaComponent } from './horario-grilla/horario-grilla.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { HorariosComponent } from './horarios/horarios.component';
import { AdministrarMateriasComponent } from './administrar-materias/administrar-materias.component';
import { ConvertidorFechasComponent } from './convertidor-fechas/convertidor-fechas.component';
import { HorarioTableComponent } from './horario-table/horario-table.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    HorarioGrillaComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    HorariosComponent,
    AdministrarMateriasComponent,
    ConvertidorFechasComponent,
    HorarioTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
