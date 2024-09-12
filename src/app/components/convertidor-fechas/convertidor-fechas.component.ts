import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor-fechas',
  templateUrl: './convertidor-fechas.component.html',
  styleUrls: ['./convertidor-fechas.component.css']
})
export class ConvertidorFechasComponent {
  fechaInput: string = '';
  tipoConversion: string = '';
  resultado: string | null = null;


  convertirFecha() {
    if (this.tipoConversion === 'barraAGuion') {
      this.resultado = this.fechaBarraAGuion(this.fechaInput);
    } else if (this.tipoConversion === 'guionABarra') {
      this.resultado = this.fechaGuionABarra(this.fechaInput);
    } else if (this.tipoConversion === 'string') {
      this.resultado = this.convertirFechaString(this.fechaInput);
    }
  }

  fechaBarraAGuion(fecha: string): string {
    return fecha.replace(/\//g, '-');
  }

  fechaGuionABarra(fecha: string): string {
    return fecha.replace(/-/g, '/');
  }

  convertirFechaString(fecha: string): string {
    const fechaObj = new Date(fecha);
    const year = fechaObj.getFullYear();
    const month = (fechaObj.getMonth() + 1).toString().padStart(2, '0');
    const day = fechaObj.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  }
}
