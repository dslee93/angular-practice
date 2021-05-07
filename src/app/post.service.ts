import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.baseUrl);
  }

  deletePost(id) {
    return this.http.delete(this.baseUrl+'/'+id);
  }

  createPost(post) {
    return this.http.post(this.baseUrl,post);
  }

  getPost(id) {
    return this.http.get(this.baseUrl+'/'+id);
  }

  updatePost(id, newPost) {
    return this.http.patch(this.baseUrl+'/'+id, newPost);
  }
}
