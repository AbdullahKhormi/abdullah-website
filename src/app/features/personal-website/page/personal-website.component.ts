import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { SummaryComponent } from "../../summary/summary.component";
import { AboutMeComponent } from "../../about-me/about-me.component";
import { SkillsComponent } from "../../skills/skills.component";
import { WorksComponent } from '../../works/works.component';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from "../../contact-me/contact-me.component";
import { NavigateSectionsService } from '../../../shared/services/header-sections/navigate-sections.service';

@Component({
  selector: 'app-personal-website',
  standalone: true,
  imports: [SummaryComponent, AboutMeComponent, SkillsComponent, WorksComponent, CommonModule, ContactMeComponent],
  templateUrl: './personal-website.component.html',
  styleUrl: './personal-website.component.scss'
})
export class PersonalWebsiteComponent implements OnInit{
  private recieveSection = inject(NavigateSectionsService)
show=false



  ngOnInit(): void {
    this.recieveSection.getNavSectionObs().subscribe((res)=>{
      console.log('rec',res)
      const element = document.querySelector(res)
if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  this.checkScroll(); // <-- يتحقق من البداية
  window.addEventListener('scroll', this.checkScroll);
  }

  scroll(){
    window.scrollTo(0, 0);
  }
checkScroll = () => {
  const header = document.querySelector('app-header');
  if (header) {
    const triggerPoint = header.getBoundingClientRect().bottom + window.scrollY;
    this.show = window.scrollY > triggerPoint;
  }
};

}
