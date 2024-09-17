import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './components/material/material.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { HorariosComponent } from './components/horarios/horarios.component';
import { AdministrarMateriasComponent } from './components/administrar-materias/administrar-materias.component';
import { ConvertidorFechasComponent } from './components/convertidor-fechas/convertidor-fechas.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HorarioGrillaComponent } from './components/horario-grilla/horario-grilla.component';
import { HorarioTablaComponent } from './components/horario-tabla/horario-tabla.component';
import { HorarioService } from '././horarios.service';
import { AgregarHorarioComponent } from './components/agregar-horario/agregar-horario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component'; 






@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    HorariosComponent,
    AdministrarMateriasComponent,
    ConvertidorFechasComponent,
    HorarioGrillaComponent,
    HorarioTablaComponent,
    AgregarHorarioComponent,
    FooterComponent
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
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HorarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
