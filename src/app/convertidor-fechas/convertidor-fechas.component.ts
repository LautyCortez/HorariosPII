import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor-fechas',
  templateUrl: './convertidor-fechas.component.html',
  styleUrls: ['./convertidor-fechas.component.css']
})
export class ConvertidorFechasComponent {

  convertirFechaString(fecha: Date): string {
    const year = fecha.getFullYear();
    const month = ('0' + (fecha.getMonth() + 1)).slice(-2);
    const day = ('0' + fecha.getDate()).slice(-2);
    return `${year}/${month}/${day}`;
  }
  
  fechaBarraAGuion(fecha: string): string {
    return fecha.replace(/\//g, '-');
  }
  
  fechaGuionABarra(fecha: string): string {
    return fecha.replace(/-/g, '/');
  }
  

}


