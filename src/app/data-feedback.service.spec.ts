import { TestBed } from '@angular/core/testing';

import { DataFeedbackService } from './data-feedback.service';

describe('DataFeedbackService', () => {
  let service: DataFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
