import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../classes/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:Post[]=[]
  form: any;

  constructor(private _Service:JsonService, private router: Router) {
    console.log('Service Component Init...');
  }

  fetchRepos(){
    this._Service.getPosts().subscribe((response: any) => {
      this.posts = response;
      console.log(this.posts);
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this._Service.createPost (this.form.value).subscribe(res => {
      console.log('Post created successfully!');
      // this.router.navigate(['home']);
    })
  }

  deletePost(postid:number){
    this._Service.deletePost(postid).subscribe(res => {
      console.log('Post deleted successfully!');
    })
  }

  ngOnInit(): void {
    this.fetchRepos()
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

}
