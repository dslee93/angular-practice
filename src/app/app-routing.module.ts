import { NgModule, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { RolesComponent } from './roles/roles.component';


const routes: Routes = [
  {path:"", component: CategoriesComponent},
  {path:"pipe", component:PipeexampleComponent},
  {path:"posts",component:PostsComponent},
  {path:"post/:id",component:PostComponent},
  {path:"contact",component:ContactComponent},
  {path:"roles",component:RolesComponent},
  {path:"albums",component:AlbumsComponent},
  {path:"album/:id", component:AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
