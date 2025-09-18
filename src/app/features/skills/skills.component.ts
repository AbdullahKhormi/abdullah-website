import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, NgZone, OnInit } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {
  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  skills: any[] = [];
  isMobile = false;

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      window.addEventListener('resize', () => {
        this.zone.run(() => {
          this.checkViewportSize();
          this.cdr.markForCheck();
        });
      });
    });

    this.skills = [
      { name: 'HTML', icon: '../../../assets/skills/html.webp', color: '#E54F26' },
      { name: 'CSS', icon: '../../../assets/skills/css.webp', color: '#0C73B8' },
      { name: 'JS', icon: '../../../assets/skills/js.webp', color: '#E7A020' },
      { name: 'TS', icon: '../../../assets/skills/ts.webp', color: '#1677C7' },
      { name: 'ANGULAR', icon: '../../../assets/skills/angular.webp', color: '#B71C1C' },
      { name: 'REACT', icon: '../../../assets/skills/react.webp', color: '#28A9E0' },
      { name: 'BOOTSTRAP', icon: '../../../assets/skills/boo.webp', color: '#7C4DFF' },
      { name: 'TILWINDS CSS', icon: '../../../assets/skills/tail.webp', color: '#00C1E0' },
    ];

    this.checkViewportSize();
  }

  checkViewportSize() {
    this.isMobile = window.innerWidth < 768;
  }

  dynamicStyles(color: string) {
    return {
      backgroundColor: color,
      width: this.isMobile ? '112px' : '144px',
      height: this.isMobile ? '112px' : '144px',
      borderRadius: '50%',
    };
  }

  trackByFn(index: number, item: any): any {
    return item.name;
  }
}
