import { Component, Input } from '@angular/core';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css',
  providers: [EgresoServicio, IngresoServicio]
})
export class CabeceroComponent {
  @Input() presupuestoTotal: number;
  @Input() ingresoTotal: number;
  @Input() egresoTotal: number;
  @Input() porcentajeTotal: number;

  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio
  ) {}
  
}
