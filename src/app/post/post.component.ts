import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id;
  post;

  constructor(private route: ActivatedRoute, private service: PostService,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.service.getPost(this.id).subscribe(
        response=>{
          this.post = response;
        }
      );
    })
  }
  updatePost(title:HTMLInputElement, body:HTMLInputElement) {
    let newPost={
      title: title.value,
      body: body.value
    };
    this.service.updatePost(this.id,newPost).subscribe(
      response=>{
        alert("Post Updated");
        this.router.navigate(['/posts']);
      }
    );

  }

}
