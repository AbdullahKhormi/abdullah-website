import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigateSectionsService {

  constructor() { }
  private navSectionObs: BehaviorSubject<any> = new BehaviorSubject(null);

    getNavSectionObs(): Observable<any> {
        return this.navSectionObs.asObservable();
    }

    setNavSectionObs(profile: any) {
        this.navSectionObs.next(profile);
    }
}
