import { Component, OnInit } from '@angular/core';
import { CotizacionService } from 'src/app/services/cotizacion.service';


@Component({
  selector: 'app-punto-a',
  templateUrl: './punto-a.component.html',
  styleUrls: ['./punto-a.component.css']
})
export class PuntoAComponent implements OnInit {
  valor: string;
  moneda1: string;
  moneda2: string;
  resultado: number;
  Rub1: number;
  Rub2: number;
  Rub3: number;
  Ars1: number;
  Ars2: number;
  Ars3: number;
  Cny1: number;
  Cny2: number;
  Cny3: number;
  constructor(private cotizacionService: CotizacionService) {
    this.cargarTabla();
    this.cargarTabla2();
    this.cargarTabla3();
    this.cargarTabla4();
    this.cargarTabla5();
    this.cargarTabla6();
    this.cargarTabla7();
    this.cargarTabla8();
    this.cargarTabla9();
   }

  cargarResultado(){
    this.cotizacionService.getResult(this.valor, this.moneda1, this.moneda2).subscribe( 
      (result) => {
        console.log(result["result"]);
        this.resultado = result["result-float"];
      });
  }

  cargarTabla(){
    this.cotizacionService.getResult("1","USD","RUB").subscribe( 
      (result) => {
        console.log(result["result"]);
        this.Rub1 = result["result-float"];
      });
  }

  cargarTabla2(){
    this.cotizacionService.getResult("1","EUR","RUB").subscribe( 
      (result) => {
        console.log(result["result"]);
        this.Rub2 = result["result-float"];
      });
  }

  cargarTabla3(){
    this.cotizacionService.getResult("1","GBP","RUB").subscribe( 
      (result) => {
        console.log(result["result"]);
        this.Rub3 = result["result-float"];
      });
  }

  cargarTabla4(){
    this.cotizacionService.getResult("1","USD","CNY").subscribe( 
      (result) => {
        console.log(result["result"]);
        this.Cny1 = result["result-float"];
      });
  }

  cargarTabla5(){
    this.cotizacionService.getResult("1","EUR","CNY").subscribe( 
      (result) => {
        console.log(result["result"]);
        this.Cny2 = result["result-float"];
      });
  }

  cargarTabla6(){
    this.cotizacionService.getResult("1","GBP","CNY").subscribe( 
      (result) => {
        console.log(result["result"]);
        this.Cny3 = result["result-float"];
      });
  }

  cargarTabla7(){
    this.cotizacionService.getResult("1","USD","ARS").subscribe( 
      (result) => {
        console.log(result["result"]);
        this.Ars1 = result["result-float"];
      });
  }

  cargarTabla8(){
    this.cotizacionService.getResult("1","EUR","ARS").subscribe( 
      (result) => {
        console.log(result["result"]);
        this.Ars2 = result["result-float"];
      });
  }

  cargarTabla9(){
    this.cotizacionService.getResult("1","GBP","ARS").subscribe( 
      (result) => {
        console.log(result["result"]);
        this.Ars3 = result["result-float"];
      });
  }

  ngOnInit(): void {
  }

}
