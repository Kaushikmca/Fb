import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(food,search) {
    if(!search || !food){
      return food;
    }
    return food.filter(item=>
      item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
  }
}
