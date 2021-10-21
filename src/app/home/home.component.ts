import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { Post } from '../classes/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:Post[]=[]

  constructor(private _Service:JsonService) {
    console.log('Service Component Init...');
  }

  fetchRepos(){
    this._Service.getPosts().subscribe((response: any) => {
      this.posts = response;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {
  }

}
