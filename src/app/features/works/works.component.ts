import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-works',
  standalone: true,
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class WorksComponent {

}
