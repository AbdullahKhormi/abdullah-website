import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {
skills:any[]=[]
ngOnInit(): void {
  this.skills=[
    {name:'HTML5'},
    {name:'CSS3'},

    {name:'ANGULAR'},
  ]
}
}
