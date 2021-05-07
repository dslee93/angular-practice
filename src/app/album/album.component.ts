import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id;
  album;
  constructor(private route: ActivatedRoute, private service : AlbumService, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.id = params['id'];
      this.service.getAlbum(this.id).subscribe(response=>{
        this.album = response;
      })
    })
  }
  updateAlbum(title:HTMLInputElement) {
    let newAlbum = {
      title: title.value
    }
    this.service.updateAlbum(this.id, newAlbum).subscribe(response=> {
      alert("album updated");
      this.router.navigate(['/albums'])
    })
  }

}
