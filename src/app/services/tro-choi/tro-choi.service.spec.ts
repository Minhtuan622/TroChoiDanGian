import { TestBed } from '@angular/core/testing';

import { TroChoiService } from './tro-choi.service';

describe('TroChoiService', () => {
  let service: TroChoiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TroChoiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
