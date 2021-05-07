import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  constructor(private service: PostService) {
   }

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      response=> {
        this.posts = response;
        console.log(this.posts);
      }
    );  
  }
  createPost(stuff) {
    console.log(stuff);
    this.service.createPost(stuff).subscribe(response=>{
      stuff = response;
      this.posts.splice(0,0,stuff);
      console.log(stuff);
    }
      );
  }
  deletePost(post) {
    this.service.deletePost(post.id).subscribe(response=> {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    })
  }

}
