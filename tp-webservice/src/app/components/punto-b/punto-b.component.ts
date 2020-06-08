import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-punto-b',
  templateUrl: './punto-b.component.html',
  styleUrls: ['./punto-b.component.css']
})
export class PuntoBComponent implements OnInit {
  categoria: string;
  noticia: Noticia;
  noticias: Array<Noticia>;
  anuncio: boolean = false;

  constructor(private noticiasServicio: NoticiasService) {
    this.noticia = new Noticia();
    this.noticias = new Array<Noticia>();
  }

  cargarNoticias() {
    console.log(this.categoria);
    this.noticiasServicio.getNoticias(this.categoria).subscribe(
      (result) => {
        this.noticias = new Array<Noticia>();
        result['arts'].forEach(element => {
          this.noticia = new Noticia();
          Object.assign(this.noticia, element);
          this.noticias.push(this.noticia);
        });
        console.log(this.noticias);
      },
      error => { alert("Error en la petición"); })
      this.anuncio = true;
  }

  ngOnInit(): void {
  }

}
