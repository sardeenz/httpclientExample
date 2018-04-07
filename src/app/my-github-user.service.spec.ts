import { TestBed, inject } from '@angular/core/testing';

import { MyGithubUserService } from './my-github-user.service';

describe('MyGithubUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGithubUserService]
    });
  });

  it('should be created', inject([MyGithubUserService], (service: MyGithubUserService) => {
    expect(service).toBeTruthy();
  }));
});
