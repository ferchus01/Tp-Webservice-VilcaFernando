import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { Covid } from 'src/app/models/covid';

@Component({
  selector: 'app-punto-d',
  templateUrl: './punto-d.component.html',
  styleUrls: ['./punto-d.component.css']
})
export class PuntoDComponent implements OnInit {
  consultaPais:string;
  covid: Covid;
  nuevo: Covid;
  paises: Array<any>;
  recuperados: boolean=false;
  fallecidos: boolean=false;
  confirmados: boolean=false;
  recuperados2: boolean=false;
  fallecidos2: boolean=false;
  confirmados2: boolean=false;

  constructor(private covidServicio:CovidService) { 
    this.paises= new Array<any>();
    this.covid = new Covid();
    this.nuevo = new Covid();
    this.cargarListaPaises();
  }

  cargarListaPaises(){
    this.covidServicio.getListaPaises().subscribe(
      (result) => {
        this.paises = new Array<any>();
        result.forEach(element => {
          this.covid = new Covid();
          Object.assign(this.covid, element);
          this.paises.push(this.covid);
        });
      },
      error => { alert("Error en la petición"); })
  }

  cargarPais(){
    this.covidServicio.getPais(this.consultaPais).subscribe(
      (result) => {
        Object.assign(this.nuevo, result);
      },
      error => { alert("Error en la petición"); })
    if (this.recuperados == true) {
      this.recuperados2 =true;
    }
    if (this.confirmados == true) {
      this.confirmados2 =true;
    }
    if (this.fallecidos == true) {
      this.fallecidos2 =true;
    }
  }

  mostrar(){
    this.recuperados2 = false;
    this.confirmados2 = false;
    this.fallecidos2 = false;
  }

  ngOnInit(): void {
  }

}
