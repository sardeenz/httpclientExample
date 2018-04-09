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
import 'rxjs/add/operator/map';

// don't forget to add MyGithubUserService to the providers section of the app.module.ts
// i.e. providers: [MyGithubUserService],
// also don't forget to import HttpClientModule inside the app.module.ts

@Injectable()
export class MyGithubUserService {

  private baseUrl = 'https://api.github.com/users/';
  private fullUrl: string;
  private login: string;

  constructor(private http: HttpClient) { }

  // I usually use this as my primary implementation strategy
  getGithubUserInfo(githubUsername: string): Observable<GithubUserModel> {
    // concatentate the passed in variable to the end of the url i.e. https://api.github.com/users/sardeenz
    this.fullUrl = this.baseUrl + githubUsername;
    console.log('this.url = ', this.fullUrl);

    // do a 'get' on the url and returns the observable as type GithubUserModel
    return this.http.get<GithubUserModel>(this.fullUrl);
  }


  // I put these next 2 examples here just to illustrate an example of using the rxjs (reactive javascript) operator of map
  // there are like 150 operators in rxjs and this is just one of them. They basically help transform observables.
  // Map transforms the items emitted by an Observable by applying a function to each item

  // do a 'get' on the url and use rxjs map operator to apply a function to each item emitted by the observable
  // only the login value in these 2 examples is returned (rxjs map operator basically calls a function on each element returned) then
  // returns it as the login variable within the type of GithubUserModel
  // Map transforms the items emitted by an Observable by applying a function to each item
  getGithubUserInfoUsingRXJSMap(githubUsername: string): Observable<string> {
    // concatentate the passed in variable to the end of the url i.e. https://api.github.com/users/sardeenz
    this.fullUrl = this.baseUrl + githubUsername;
    console.log('this.url = ', this.fullUrl);

    return this.http.get<GithubUserModel>(this.fullUrl).map((x) => {
      return x.login + ' is a doodoohead';  // this is the function that transforms the value
      // I could optionally just return x which is the whole populated object of GithubUserModel
    });
  }

  getGithubUserLoginInfoUsingRXJSMap(githubUsername: string): Observable<string> {
    // concatentate the passed in variable to the end of the url i.e. https://api.github.com/users/sardeenz
    this.fullUrl = this.baseUrl + githubUsername;
    console.log('this.url = ', this.fullUrl);

    return this.http.get<GithubUserModel>(this.fullUrl).map(({ login }) => {
      return login + ' is a doodoohead2';  // this is the function that transforms the value
    });
  }

}



