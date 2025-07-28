import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-works',
  standalone: true,
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WorksComponent {
  onProgress(event: CustomEvent) {
    console.log('Progress event:', event.detail);
  }

  onSlideChange() {
    console.log('Slide changed');
  }
}
