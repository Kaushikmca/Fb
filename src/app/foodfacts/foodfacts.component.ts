import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-foodfacts',
  templateUrl: './foodfacts.component.html',
  styleUrls: ['./foodfacts.component.css']
})
export class FoodfactsComponent implements OnInit {
  public food:any=[];
  constructor(public Apiservice:ApiService) { }

  ngOnInit(): void {
    console.log("Food Facts Component is Loaded");   
    this.getfoodfacts();
  }

  getfoodfacts():void{
    this.Apiservice.getFoodfacts()
    .subscribe(data=>{
      this.food=data;
      console.log(data);
    });
  }

}
