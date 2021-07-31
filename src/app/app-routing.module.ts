import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BeerComponent } from './beer/beer.component';
import { CiderComponent } from './cider/cider.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocoaComponent } from './cocoa/cocoa.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { DairyfoodComponent } from './dairyfood/dairyfood.component';
import { EggsComponent } from './eggs/eggs.component';
import { EnergydrinksComponent } from './energydrinks/energydrinks.component';
import { FishComponent } from './fish/fish.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GrainsComponent } from './grains/grains.component';
import { HardalcoholComponent } from './hardalcohol/hardalcohol.component';
import { HomeComponent } from './home/home.component';
import { JuicesComponent } from './juices/juices.component';
import { LegumesComponent } from './legumes/legumes.component';
import { MeatComponent } from './meat/meat.component';
import { MembranesComponent } from './membranes/membranes.component';
import { MilkComponent } from './milk/milk.component';
import { MilkshakesComponent } from './milkshakes/milkshakes.component';
import { MocktailsComponent } from './mocktails/mocktails.component';
import { NutsComponent } from './nuts/nuts.component';
import { PlasmaComponent } from './plasma/plasma.component';
import { PoultryComponent } from './poultry/poultry.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { SeedsComponent } from './seeds/seeds.component';
import { SmoothiesComponent } from './smoothies/smoothies.component';
import { SparklingdrinksComponent } from './sparklingdrinks/sparklingdrinks.component';
import { TeaComponent } from './tea/tea.component';
import { TonicwaterComponent } from './tonicwater/tonicwater.component';
import { ToptrendyComponent } from './toptrendy/toptrendy.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { VotkaComponent } from './votka/votka.component';
import { WaterComponent } from './water/water.component';
import { WineComponent } from './wine/wine.component';

const routes: Routes = [
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'beer',component:BeerComponent},
  {path:'cider',component:CiderComponent},
  {path:'cocktails',component:CocktailsComponent},
  {path:'cocoa',component:CocoaComponent},
  {path:'coffee',component:CoffeeComponent},
  {path:'dairyfood',component:DairyfoodComponent},
  {path:'eggs',component:EggsComponent},
  {path:'energydrinks',component:EnergydrinksComponent},
  {path:'fish',component:FishComponent},
  {path:'fruits',component:FruitsComponent},
  {path:'grains',component:GrainsComponent},
  {path:'hardalcohol',component:HardalcoholComponent},
  {path:'home',component:HomeComponent},
  {path:'juices',component:JuicesComponent},
  {path:'legumes',component:LegumesComponent},
  {path:'meat',component:MeatComponent},
  {path:'membranes',component:MembranesComponent},
  {path:'milk',component:MilkComponent},
  {path:'milkshakes',component:MilkshakesComponent},
  {path:'mocktails',component:MocktailsComponent},
  {path:'nuts',component:NutsComponent},
  {path:'plasma',component:PlasmaComponent},
  {path:'poultry',component:PoultryComponent},
  {path:'seafood',component:SeafoodComponent},
  {path:'seeds',component:SeedsComponent},
  {path:'smoothies',component:SmoothiesComponent},
  {path:'sparklingdrinks',component:SparklingdrinksComponent},
  {path:'tea',component:TeaComponent},
  {path:'tonicwater',component:TonicwaterComponent},
  {path:'toptrendy',component:ToptrendyComponent},
  {path:'vegetables',component:VegetablesComponent}  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
