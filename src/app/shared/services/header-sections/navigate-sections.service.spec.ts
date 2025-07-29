import { TestBed } from '@angular/core/testing';

import { NavigateSectionsService } from './navigate-sections.service';

describe('NavigateSectionsService', () => {
  let service: NavigateSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigateSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
