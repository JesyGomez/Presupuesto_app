import { Component } from '@angular/core';
import { CabeceroComponent } from '../cabecero/cabecero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egreso',
  standalone: true,
  imports: [CommonModule, CabeceroComponent],
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
export class EgresoComponent {

}
