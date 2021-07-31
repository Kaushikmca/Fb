import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlasmaComponent } from './plasma/plasma.component';
import { MembranesComponent } from './membranes/membranes.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GrainsComponent } from './grains/grains.component';
import { LegumesComponent } from './legumes/legumes.component';
import { NutsComponent } from './nuts/nuts.component';
import { SeedsComponent } from './seeds/seeds.component';
import { MeatComponent } from './meat/meat.component';
import { PoultryComponent } from './poultry/poultry.component';
import { FishComponent } from './fish/fish.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { DairyfoodComponent } from './dairyfood/dairyfood.component';
import { EggsComponent } from './eggs/eggs.component';
import { BeerComponent } from './beer/beer.component';
import { WineComponent } from './wine/wine.component';
import { CiderComponent } from './cider/cider.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { HardalcoholComponent } from './hardalcohol/hardalcohol.component';
import { VotkaComponent } from './votka/votka.component';
import { WaterComponent } from './water/water.component';
import { MilkComponent } from './milk/milk.component';
import { TeaComponent } from './tea/tea.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { SparklingdrinksComponent } from './sparklingdrinks/sparklingdrinks.component';
import { JuicesComponent } from './juices/juices.component';
import { EnergydrinksComponent } from './energydrinks/energydrinks.component';
import { MocktailsComponent } from './mocktails/mocktails.component';
import { MilkshakesComponent } from './milkshakes/milkshakes.component';
import { SmoothiesComponent } from './smoothies/smoothies.component';
import { CocoaComponent } from './cocoa/cocoa.component';
import { TonicwaterComponent } from './tonicwater/tonicwater.component';
import { ToptrendyComponent } from './toptrendy/toptrendy.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    AboutComponent,
    PlasmaComponent,
    MembranesComponent,
    FilterPipe,
    VegetablesComponent,
    FruitsComponent,
    GrainsComponent,
    LegumesComponent,
    NutsComponent,
    SeedsComponent,
    MeatComponent,
    PoultryComponent,
    FishComponent,
    SeafoodComponent,
    DairyfoodComponent,
    EggsComponent,
    BeerComponent,
    WineComponent,
    CiderComponent,
    CocktailsComponent,
    HardalcoholComponent,
    VotkaComponent,
    WaterComponent,
    MilkComponent,
    TeaComponent,
    CoffeeComponent,
    SparklingdrinksComponent,
    JuicesComponent,
    EnergydrinksComponent,
    MocktailsComponent,
    MilkshakesComponent,
    SmoothiesComponent,
    CocoaComponent,
    TonicwaterComponent,
    ToptrendyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
