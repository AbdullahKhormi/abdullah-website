import { Component,ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ NgOptimizedImage],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AboutMeComponent {}
