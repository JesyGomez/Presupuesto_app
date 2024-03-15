import { Component } from '@angular/core';
import { CabeceroComponent } from '../cabecero/cabecero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone:true,
  imports: [CommonModule, CabeceroComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
