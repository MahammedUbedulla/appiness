import { TestBed, async, inject } from '@angular/core/testing';

import { DashDeactivateGuard } from './dash-deactivate.guard';

describe('DashDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashDeactivateGuard]
    });
  });

  it('should ...', inject([DashDeactivateGuard], (guard: DashDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
