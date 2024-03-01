import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingreso:Ingreso[]=[
        new Ingreso("Salario", 4000),
        new Ingreso("Venta de Coche", 5000)
    ]
  ingresos: Ingreso[];
}