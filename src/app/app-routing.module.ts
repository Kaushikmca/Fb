import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerComponent } from './beer/beer.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { BeerCoComponent } from './beer-co/beer-co.component';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { FoodfactsComponent } from './foodfacts/foodfacts.component';
import { AboutComponent } from './about/about.component';
import { PlasmaComponent } from './plasma/plasma.component';
import { MembranesComponent } from './membranes/membranes.component';

const routes: Routes = [
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'plasma',component:PlasmaComponent},
  {path:'membranes',component:MembranesComponent},
  {path:'beer',component:BeerComponent},
  {path:'beer-co',component:BeerCoComponent},
  {path:'cocktail',component:CocktailComponent},
  {path:'food',component:FoodComponent},
  {path:'foodfacts',component:FoodfactsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
