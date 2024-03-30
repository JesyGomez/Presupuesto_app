import { Component, OnInit } from '@angular/core';
import { CabeceroComponent } from '../cabecero/cabecero.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  standalone:true,
  imports: [CommonModule, CabeceroComponent, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
tipo: string="ingresoOperacion";
descripcionInput:string;
valorInput:number;

constructor(private ingresoServicio:IngresoServicio,
  private egresoServicio:EgresoServicio){}
ngOnInit(){

}

tipoOperacion(evento: any) {
  // Cuando especificamos any, estás indicando que el tipo de evento puede ser cualquier cosa
  this.tipo = evento.target.value;
}

agregarValor(){
if(this.tipo === "ingresoOperacion")
this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
else 
  this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
}


}