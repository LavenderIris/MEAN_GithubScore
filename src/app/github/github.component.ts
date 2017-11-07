import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GithubComponent implements OnInit {
  info: any;
  score = 0;
  myusername = '';

  constructor(private _httpService: HttpService) { // <-- Step 2 & 3
    this.info = this._httpService.info;  // <-- Step 4
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('in onsubmit', this.myusername);
    this._httpService.getUserData(callback => {
      this.score = callback['public_repos'] + callback['followers'];
    }, this.myusername);

  }

}
