import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 


  }

getAllDishes(){
    return this.http.get("https://simple-product-catalog.herokuapp.com/api/dish");
}


getADish(dishId){
    return this.http.get(" https://simple-product-catalog.herokuapp.com/api/dish/"+dishId);

}

createDish(Dish){
    return this.http.post("https://simple-product-catalog.herokuapp.com/api/dish?name=Fish&price=1000CFA&quantity=20",Dish);
}

deleteDish(DishId){
     return this.http.delete("https://simple-product-catalog.herokuapp.com/api/dish/"+DishId);

}

}
