import { Component, OnInit } from '@angular/core';
import { CabeceroComponent } from '../cabecero/cabecero.component';
import { CommonModule } from '@angular/common';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  standalone: true,
  imports: [CommonModule, CabeceroComponent],
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
export class EgresoComponent {
  egresos:Egreso[]=[];
  
  constructor(private egresoServicio:EgresoServicio){
  }
  ngOnInit(){
    this.egresos = this.egresoServicio.egresos;
  }
  
  eliminarEgreso(egreso: Egreso){
    this.egresoServicio.eliminar(egreso);
  }

}
