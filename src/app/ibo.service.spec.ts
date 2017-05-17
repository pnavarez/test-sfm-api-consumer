import { TestBed, inject } from '@angular/core/testing';

import { IboService } from './ibo.service';

describe('IboService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IboService]
    });
  });

  it('should be created', inject([IboService], (service: IboService) => {
    expect(service).toBeTruthy();
  }));
});
