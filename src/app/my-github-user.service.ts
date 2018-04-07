// this file was originally generated via 'ng g s myGithubUser'
// which means - ng generate service myGithubUser
// note that the name of the typescript interface is MyGithubUserService
// (when you generate a service, the word Service is automatically appended)
// whereas the name of the file is my-github-user.service.ts
// camelcase results in dashes in the filename

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GithubUserModel } from './github-user-model';

// don't forget to add MyGithubUserService to the providers section of the app.module.ts
// i.e. providers: [MyGithubUserService],
// also don't forget to import HttpClientModule inside the app.module.ts

@Injectable()
export class MyGithubUserService {

  private url = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getGithubUserInfo(githubUsername: string): Observable<GithubUserModel> {
    // concatentate the passed in variable to the end of the url i.e. https://api.github.com/users/sardeenz
    this.url = this.url + githubUsername;
    console.log('this.url = ', this.url);

    // do a 'get' on the url and return it as type GithubUserModel
    return this.http.get<GithubUserModel>(this.url);
  }
}
