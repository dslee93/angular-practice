import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  baseUrl = "https://jsonplaceholder.typicode.com/albums"
  constructor(private http : HttpClient) { }
  getAlbums() {
    return this.http.get(this.baseUrl);
  }

  createAlbum(album) {
    return this.http.post(this.baseUrl, album);
  }

  deleteAlbum(id) {
    return this.http.delete(this.baseUrl+'/'+id);
  }

  getAlbum(id) {
    return this.http.get(this.baseUrl+'/'+id);
  }
  updateAlbum(id, newAlbum) {
    return this.http.patch(this.baseUrl+'/'+id, newAlbum);
  }
}
