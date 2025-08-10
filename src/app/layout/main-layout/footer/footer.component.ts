import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FooterComponent {
date = new Date()
}
