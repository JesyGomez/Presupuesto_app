import { Component } from '@angular/core';
import { CabeceroComponent } from '../cabecero/cabecero.component';

@Component({
  selector: 'app-formulario',
  standalone:true,
  imports: [CabeceroComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
