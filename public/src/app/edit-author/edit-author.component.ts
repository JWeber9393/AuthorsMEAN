import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  author: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.author = {};
    this._route.params.subscribe((params: Params) => {
      this._httpService.getAuthor(params['id']).subscribe((data) =>{
        this.author = data;
      })
    })
  }
  goHome(){
    this._router.navigate(['/']);
  }
  
  editAuthorFromService(){
    const edits = {name:this.author.info.name
    
    };
    console.log("##########", edits);
    let obs =this._httpService.editAuthor(edits,this.author.info._id);
    obs.subscribe(data => {
      console.log('update', data);
      this.author = {};
    })
    this.goHome();
  }
}
