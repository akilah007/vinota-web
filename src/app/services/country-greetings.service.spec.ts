import { TestBed } from '@angular/core/testing';

import { CountryGreetingsService } from './country-greetings.service';

describe('CountryGreetingsService', () => {
  let service: CountryGreetingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryGreetingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
