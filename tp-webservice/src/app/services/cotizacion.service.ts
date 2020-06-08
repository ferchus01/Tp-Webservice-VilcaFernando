import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(private _http: HttpClient) { }

  public getResult(valor: string, moneda1: string, moneda2: string):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'community-neutrino-currency-conversion.p.rapidapi.com', 
        'X-RapidAPI-Key': '138f0ff212msh47dac7064178824p150877jsne14d2c5405fc',
        'content-type': 'application/x-www-form-urlencoded',
        'useQueryString': 'true'
      }),
      params: {
        'from-type': moneda1,
        'to-type': moneda2,
        'from-value': valor
      }
    };
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", 'from-type/to-type/from-value', httpOptions);
  }

}
