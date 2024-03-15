import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [IngresoServicio, EgresoServicio],
  imports: [
    RouterOutlet,
    CabeceroComponent,
    FormularioComponent,
    IngresoComponent,
    EgresoComponent,
  ],
})

export class AppComponent {
  title = 'presupuesto_app';

  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio,
  ) {}
//En el constructor de AppComponent, estamos inyectando dos servicios: IngresoServicio y EgresoServicio. 
//Estos servicios nos proporcionarán los datos de ingresos y egresos que necesitamos para calcular los totales.
  getIngresoTotal(){
    return this.ingresoServicio.ingreso.reduce((total, ingreso) => total + ingreso.valor, 0);
  }
//calcula el total de ingresos sumando los valores de cada objeto ingreso en el arreglo ingresoServicio.ingreso. 
//Utiliza el método reduce() para sumar los valores y devuelve el resultado
  getEgresoTotal(){
    return this.egresoServicio.egreso.reduce((total, egreso) => total + egreso.valor, 0);
  }
//calcula el total de egresos de manera similar al método getIngresoTotal(), pero suma los valores de los objetos egreso 
//en el arreglo egresoServicio.egreso.
  getPorcentajeTotal(){
    const ingresoTotal = this.getIngresoTotal();
    const egresoTotal = this.getEgresoTotal();
    return egresoTotal / ingresoTotal;
  }
//calcula el porcentaje total dividiendo el total de egresos entre el total de ingresos. Primero obtiene los totales de 
//ingresos y egresos llamando a los métodos getIngresoTotal() y getEgresoTotal(), respectivamente.
  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
  //calcula el presupuesto total restando el total de egresos del total de ingresos. Nuevamente, utiliza 
  //los métodos getIngresoTotal() y getEgresoTotal() para obtener los totales necesarios.
}
