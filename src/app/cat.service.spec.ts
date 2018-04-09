import { TestBed, inject } from '@angular/core/testing';
import { CatService } from './cat.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CatService ]
    });
  });

  it('should be created', inject([CatService], (service: CatService) => {
    expect(service).toBeTruthy();
  }));
});
