import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http: HttpClient) { }

  public getNoticias(categoria: string):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'livescore6.p.rapidapi.com', 
        'X-RapidAPI-Key': '138f0ff212msh47dac7064178824p150877jsne14d2c5405fc',
      }),
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria, httpOptions);
  }
}
