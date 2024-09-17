import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { lautaroGuard } from './lautaro.guard';

describe('lautaroGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => lautaroGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
