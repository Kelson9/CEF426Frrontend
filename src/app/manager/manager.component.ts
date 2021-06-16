import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { TokenStorageService } from '../token-storage-service.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  Dish:any;
  dishId:any;
  currentUser: any;

  constructor(private api:ApiService, private router:Router,private token: TokenStorageService) {
this.getAllDish();
this.currentUser = this.token.getUser();


   }

 
  

  ngOnInit(): void {
  }

  getAllDish(){
      this.api.getAllDishes().subscribe((data)=>{
        this.Dish=data;
        console.log(this.Dish);
     });

    }
     deleteDish(dishId){
       return this.api.deleteDish(dishId).subscribe(data=>{
          console.log(data);

       })

     }

     details(dishId:any){
       this.router.navigate(['/dish',dishId]);


     }

  }



