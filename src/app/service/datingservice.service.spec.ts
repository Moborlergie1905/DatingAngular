import { TestBed, inject } from '@angular/core/testing';

import { DatingserviceService } from './datingservice.service';

describe('DatingserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatingserviceService]
    });
  });

  it('should be created', inject([DatingserviceService], (service: DatingserviceService) => {
    expect(service).toBeTruthy();
  }));
});
