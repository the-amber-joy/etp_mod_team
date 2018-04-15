import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OffenderService } from './offender.service';
import { Offender } from '../shared/offender.model';
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
          'A new note. Some words go here',
          new Admin('Fake','Tester','Admin')
        )
      ]
    }];

    let actualoffenders = [];
    offenderService.getAll().subscribe((offenders: Array<Offender>) => {
      actualoffenders = offenders;
    });

    http.expectOne('/api/offenders').flush(expectedOffenders);

    expect(actualoffenders).toEqual(expectedOffenders);
  })
});