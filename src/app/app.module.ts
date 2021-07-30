import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CocktailComponent } from './cocktail/cocktail.component';
import { BeerComponent } from './beer/beer.component';
import { BeerCoComponent } from './beer-co/beer-co.component';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { FoodfactsComponent } from './foodfacts/foodfacts.component';
import { AboutComponent } from './about/about.component';
import { PlasmaComponent } from './plasma/plasma.component';
import { MembranesComponent } from './membranes/membranes.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CocktailComponent,
    BeerComponent,
    BeerCoComponent,
    HomeComponent,
    FoodComponent,
    FoodfactsComponent,
    AboutComponent,
    PlasmaComponent,
    MembranesComponent,
    FilterPipe
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
