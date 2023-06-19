import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicbookServiceService {
  characterDetail = ""; 

  constructor(
    private http: HttpClient
  ) { }

  getCharactors(){
    let url = "https://comicvine.gamespot.com/api/characters/?api_key=a4dd91c73cb04cdf28ff7d89eb235efcc5f1325b&format=json";
    return this.http.get(url);
  }
}


