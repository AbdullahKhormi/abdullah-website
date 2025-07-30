import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule , ScrollRevealDirective],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
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
