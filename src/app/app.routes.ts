import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home', pathMatch: 'full'

   },
           {path:'home' ,loadComponent:()=>import('../../src/app/features/personal-website/page/personal-website.component').then(c=>c.PersonalWebsiteComponent)}
];
