import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums;
  constructor(private service : AlbumService) { }

  ngOnInit(): void {
    this.service.getAlbums().subscribe(
      response=> {
        this.albums = response;
        console.log(this.albums);
      })
  }
  createAlbum(album) {
    this.service.createAlbum(album).subscribe(response=>
      {
        album = response;
        this.albums.splice(0, 0, album);
      }
    )
  }
  deleteAlbum(album) {
    this.service.deleteAlbum(album.id).subscribe(response=> {
        let index = this.albums.indexOf(album);
        console.log(index);
        this.albums.splice(index, 1);
      })
  }

}
