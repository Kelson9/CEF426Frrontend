import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {
id:any;
Dish:any;
  constructor(private active:ActivatedRoute,private api:ApiService) { 
this.id=this.active.snapshot.params.id;

  }

  ngOnInit(){

  return  this.api.getADish(this.id).subscribe((data)=>{
  this.Dish=data;
  console.log(this.Dish);

})

  }



}
