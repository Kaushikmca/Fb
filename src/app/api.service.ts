import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root' 
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getBeer()
  {
    return this.http.get('https://api.punkapi.com/v2/beers');
  }
  getCocktail()
  {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s');
  }
  getBeerco()
  {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
  getFooddetails()
  {
    return this.http.get('https://api.fda.gov/food/enforcement.json?limit=1000');
  }
  getFoodfacts()
  {
    return this.http.get('https://world.openfoodfacts.org/api/v0/product/737628064502.json');
  }
}
 