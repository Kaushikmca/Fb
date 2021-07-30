import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})

export class CocktailComponent implements OnInit {
  public food:any=[];
  public p:any;
  search='';
  constructor(private ApiService:ApiService) {}

   ngOnInit():void{
    console.log("Cocktail Component is Loaded");
    this.getCocktail();
  } 

  getCocktail() :void{
    this.ApiService.getCocktail()
    .subscribe(data=>{
      this.food=data;
      console.log(this.food); 
    });
  }
  
}
