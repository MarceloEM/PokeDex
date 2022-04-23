import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private monUrl: string = "https://pokeapi.co/api/v2/pokemon/";
  constructor( private http: HttpClient) {
    console.log('PokeApi');
   }
  getName(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151");
  }
  getMon(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`) ;
  }

}
