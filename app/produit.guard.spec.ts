import { TestBed, async, inject } from '@angular/core/testing';

import { ProduitGuard } from './produit.guard';

describe('ProduitGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduitGuard]
    });
  });

  it('should ...', inject([ProduitGuard], (guard: ProduitGuard) => {
    expect(guard).toBeTruthy();
  }));
});
