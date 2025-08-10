import { Component,ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AboutMeComponent {}
