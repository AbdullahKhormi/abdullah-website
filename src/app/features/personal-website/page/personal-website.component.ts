import { Component } from '@angular/core';
import { SummaryComponent } from "../../summary/summary.component";
import { AboutMeComponent } from "../../about-me/about-me.component";

@Component({
  selector: 'app-personal-website',
  standalone: true,
  imports: [SummaryComponent, AboutMeComponent],
  templateUrl: './personal-website.component.html',
  styleUrl: './personal-website.component.scss'
})
export class PersonalWebsiteComponent {

}
