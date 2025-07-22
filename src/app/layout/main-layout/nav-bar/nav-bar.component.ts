import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-nav-bar',
  imports:[CommonModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
activeIndex:number=-1
  constructor() { }
  openDropDown=false
links:any[]=[]
  ngOnInit() {
    this.links=[
    //   {
    //   path:'/home' , name:'t'
    // },

  ]
  }
activeLink(index:any){
  this.activeIndex = index;
  console.log(index)
}
clickDropDown(){
  this.openDropDown=!this.openDropDown
}
}
