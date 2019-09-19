import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';



@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  newAuthor: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.newAuthor = {}
   }

  ngOnInit() {
  }

  createAuthorFromService(){
    let obs = this._httpService.createAuthor(this.newAuthor);
    obs.subscribe(data => {})
    this._router.navigate([''])
  }
}
