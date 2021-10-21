import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './classes/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  

  constructor(private _http: HttpClient) {
    console.log('Posts Service Init...');
  }

  getPosts(){
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
  }

  createPost(post:any){
    return this._http.post<Post>('https://jsonplaceholder.typicode.com/posts',JSON.stringify(post))
  }

}
