import { Component } from '@angular/core';
import { SummaryComponent } from "../../summary/summary.component";

@Component({
  selector: 'app-personal-website',
  standalone: true,
  imports: [SummaryComponent],
  templateUrl: './personal-website.component.html',
  styleUrl: './personal-website.component.scss'
})
export class PersonalWebsiteComponent {

}
