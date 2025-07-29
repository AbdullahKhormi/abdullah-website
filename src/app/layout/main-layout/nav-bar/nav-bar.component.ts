import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigateSectionsService } from '../../../shared/services/header-sections/navigate-sections.service';

@Component({
  standalone:true,
  selector: 'app-nav-bar',
  imports:[CommonModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
activeIndex:number=-1
private sendSection= inject(NavigateSectionsService)
  constructor() { }
  openDropDown=false
links:any[]=[]
  ngOnInit() {
    this.links=[
      {
      name:'about-me',nav:'#about-me',

    },
      {
        name:'skills',nav:'#skills',

    },
      {
        name:'works',nav:'#works',

    },
      {
      name:'contact me',nav:'#contact-me',

    },

  ]
  }
  navigateToSections(event:any){
    console.log(event)
  }
activeLink(index:any,nav:any){
  this.activeIndex = index;
this.sendSection.setNavSectionObs(nav)
this.openDropDown=false


}
clickDropDown(){
  this.openDropDown=!this.openDropDown
}
}
