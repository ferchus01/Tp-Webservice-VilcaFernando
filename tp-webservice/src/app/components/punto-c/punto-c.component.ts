import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-punto-c',
  templateUrl: './punto-c.component.html',
  styleUrls: ['./punto-c.component.css']
})
export class PuntoCComponent implements OnInit {
  fecha:string;
  resultado: string;
  constructor(private horoscopoServicio: HoroscopoService) { }

  ngOnInit(): void {
  }

  cargarResultado(){
    this.horoscopoServicio.getHoroscopo(this.fecha).subscribe( 
      (result) => {
        console.log(result);
        this.resultado = result;
      });
  }
}
