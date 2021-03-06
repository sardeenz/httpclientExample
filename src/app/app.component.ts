import { GithubUserModel } from './github-user-model';
import { Component, OnInit } from '@angular/core';
import { MyGithubUserService } from './my-github-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  userModel: GithubUserModel;

  constructor(private githubServce: MyGithubUserService) { }

  ngOnInit(): void {

    // call the github service and subscribe to the returned observable
    // in this example, we declared (on the fly) the reponse to be the variable 'results' but this can be called anything
    // you could replace the variable results with the word doodoohead and it would still work fine.
    this.githubServce.getGithubUserInfo('sardeenz')
      .subscribe((results) => {
        console.log('results are ', results);
        this.userModel = results;
        console.log('this.userModel = ', this.userModel);
        console.log('login = ', this.userModel.login);
      });

    // this basically does the same thing, but uses rxjs map operator
    this.githubServce.getGithubUserInfoUsingRXJSMap('sardeenz')
      .subscribe(val => console.log('val = ', val));

    // this basically does the same thing, but uses rxjs map operator
    this.githubServce.getGithubUserLoginInfoUsingRXJSMap('sardeenz')
      .subscribe(val => console.log('val = ', val));
  }

}

