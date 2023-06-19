import { TestBed } from '@angular/core/testing';

import { ComicbookServiceService } from './comicbook-service.service';

describe('ComicbookServiceService', () => {
  let service: ComicbookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicbookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
