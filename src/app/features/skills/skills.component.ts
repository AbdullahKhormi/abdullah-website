import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit{
skills:any[]=[]
ngOnInit(): void {
this.skills=[
  {
 name:'HTML', icon:'../../../assets/skills/html.svg',color:'#E54F26'
},
  {
 name:'CSS', icon:'../../../assets/skills/css.svg',color:'#0C73B8'
},
  {
 name:'JS', icon:'../../../assets/skills/js.svg',color:'#E7A020'
},
  {
 name:'TS', icon:'../../../assets/skills/ts.svg',color:'#1677C7'
},
  {
 name:'ANGULAR', icon:'../../../assets/skills/angular.svg',color:'#B71C1C'
},

  {
 name:'REACT', icon:'../../../assets/skills/react.svg',color:'#28A9E0'
},
  {
 name:'BOOTSTRAP', icon:'../../../assets/skills/boo.svg',color:'#7C4DFF'
},
  {
 name:'TILWINDS CSS', icon:'../../../assets/skills/tail.svg',color:'#00C1E0'
},
]
}
}
