import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'] 
})

export class BeerComponent implements OnInit {
  title = 'beer';  
  public beer:any=[]; 
  public p:any;    
  constructor(private ApiService:ApiService) {}

  ngOnInit(): void {
    console.log("Beer component is loaded");
    this.beersample();
  }

  beersample():void{
    this.ApiService.getBeer()
    .subscribe(data=>{ 
    this.beer=data;        
    console.log(data);    
    });
  } 

}
