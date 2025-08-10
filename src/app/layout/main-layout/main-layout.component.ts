import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent , CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',

})
export class MainLayoutComponent {
   loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 300);
  }
}
