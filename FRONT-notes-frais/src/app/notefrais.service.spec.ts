import { TestBed, inject } from '@angular/core/testing';

import { NotefraisService } from './notefrais.service';

describe('NotefraisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotefraisService]
    });
  });

  it('should be created', inject([NotefraisService], (service: NotefraisService) => {
    expect(service).toBeTruthy();
  }));
});
