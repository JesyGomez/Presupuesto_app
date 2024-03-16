import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egreso:Egreso[]=[
        new Egreso("Renta Dpto", 900),
        new Egreso("Ropa informal", 200)
    ];

    eliminar(egreso:Egreso){
      const indice: number = this.egresos.indexOf(egreso);
      this.egresos.splice(indice,1); 
  }
  egresos: Egreso[] = this.egreso;
}