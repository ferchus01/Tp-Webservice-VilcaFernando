import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private _http: HttpClient) { }

  public getPais(pais:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'covid-19-tracking.p.rapidapi.com', 
        'X-RapidAPI-Key': '138f0ff212msh47dac7064178824p150877jsne14d2c5405fc',
        'useQueryString': 'true'
      })
    };
  return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1/"+pais, httpOptions);
  }

  public getListaPaises():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'covid-19-tracking.p.rapidapi.com', 
        'X-RapidAPI-Key': '138f0ff212msh47dac7064178824p150877jsne14d2c5405fc',
        'useQueryString': 'true'
      })
    };
  return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1", httpOptions);
  }
}
