import { Component } from '@angular/core';
import { CabeceroComponent } from '../cabecero/cabecero.component';
import { CommonModule } from '@angular/common';
import { IngresoServicio } from './ingreso.servicio';
import { Ingreso } from './ingreso.model';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [CommonModule, CabeceroComponent],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css',
  
})
export class IngresoComponent {
ingresos: Ingreso[]=[];

constructor(private ingresoServicio:IngresoServicio){
}
ngOnInit(){
  this.ingresos = this.ingresoServicio.ingresos;
}

eliminarRegistro(ingreso: Ingreso){
  this.ingresoServicio.eliminar(ingreso);
}

}
