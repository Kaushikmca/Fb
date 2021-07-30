import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-beer-co',
  templateUrl: './beer-co.component.html',
  styleUrls: ['./beer-co.component.css']
})
export class BeerCoComponent implements OnInit {
  title='beer Company';
  public beerco:any=[];
  public p:any;
  constructor(public ApiService:ApiService) { }
 
  ngOnInit(): void {
    console.log("Beer Company Component is loaded");
    this.beerbw();
  }
  beerbw():void {
    this.ApiService.getBeerco()
    .subscribe(data=>{
      this.beerco=data;
      //console.log(data);
    });
  }
  filterData=[];
//  searchRegX=/^[a-zA-Z ]{}$/;
  search(t1){
    this.filterData=this.beerco.filter((res)=>{
    //  console.log(this.searchRegX.test(res.brewery_type));
      return res.brewery_type.toLocaleLowerCase().includes(t1.value.toLocaleLowerCase());
    })
  }
}
