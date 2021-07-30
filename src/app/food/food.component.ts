import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {
  public foody:any=[];
  public p:any;
  constructor(public Apiservice:ApiService) { }

  ngOnInit(): void {
    console.log("Food Component is loaded");
    this.getfooddetails();
  }

  getfooddetails():void{
    this.Apiservice.getFooddetails()
    .subscribe(data=>{
      this.foody=data;
      console.log(data);
    });
  }

}
