import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OffenderService } from './offender.service';
import { Offender } from './offender.model';
import { Note } from '../shared/note.model';
import { Admin } from '../shared/admin.model';

describe('OffenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OffenderService]
    });
  });

  it('should be created', inject([OffenderService], (service: OffenderService) => {
    expect(service).toBeTruthy();
  }));

  it('should list the offenders', () => {
    const offenderService = TestBed.get(OffenderService);
    const http = TestBed.get(HttpTestingController);
    // fake response
    const expectedOffenders = [{
      firstName: 'Fake',
      lastName: 'Tester',
      score: 1,
      dateAdded: new Date().getDate() - 5,
      lastUpdated: this.dateAdded + 1,
      notes: [
        new Note(
          'some words',
          this.dateAdded,
          new Admin('Big','Admin','BigAdmin')
        )
      ]
    }];

    // let actualoffenders = [];
    // offenderService.getPersonList().subscribe((offenders: Array<Offender>) => {
    //   actualoffenders = offenders;
    // });

    // http.expectOne('/api/people').flush(expectedOffenders);

    // expect(actualoffenders).toEqual(expectedOffenders);
  })
});