import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './services/poke-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PokeDex';
  monList: any=[];

  constructor(private PokeApiService: PokeApiService){
    console.log("Componente Creado");
  }
  ngOnInit(): void {
    console.log("El Componente se ha inizializado");
    this.PokeApiService.getName()
      .subscribe((response:any) => {
        response.results.forEach((result: { name: string; }) => {
          this.PokeApiService.getMon(result.name)
          .subscribe((response2: any) => {
            this.monList.push(response2);
            console.log(this.monList);
          });
        });
      });      
  }
}
