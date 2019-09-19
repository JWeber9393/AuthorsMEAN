import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  authors=[];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }
  getAuthorsFromService() {
    let obs = this._httpService.allAuthors();
    obs.subscribe(data => {
      console.log(data);

      this.authors = data['info'];
    })
  }
  onDelete(author) {
    let obs = this._httpService.deleteAuthor(author);
    obs.subscribe(data => {
      this.getAuthorsFromService();
    })
  }

}
