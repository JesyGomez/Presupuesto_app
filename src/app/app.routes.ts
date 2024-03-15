import { Routes } from '@angular/router';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoComponent } from './ingreso/ingreso.component';

export const routes: Routes = [
    {
        path: 'cabecero',
        component: CabeceroComponent,
    },
    {
        path: 'egreso',
        component: EgresoComponent,
    },
    {
        path: 'formulario',
        component: FormularioComponent
    },
    {
        path: 'ingreso',
        component: IngresoComponent
    }
];
