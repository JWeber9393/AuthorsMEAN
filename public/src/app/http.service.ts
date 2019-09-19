import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  allAuthors(){
    return this._http.get('/authors')
  }

  getAuthor(author){
    return this._http.get(`/authors/${author}`)
  }

  createAuthor(newAuthor){
    return this._http.post('/authors', newAuthor)
  }

  editAuthor(author,id:string) {
    console.log(author);
    console.log(id);
    return this._http.put(`/authors/${id}`, author)
  }

  deleteAuthor(author){
    return this._http.delete(`/authors/${author._id}`, author)
  }
}
