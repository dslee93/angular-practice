import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { SummaryPipe } from './summary.pipe';
import { LoginComponent } from './login/login.component';
import { LetterchangeComponent } from './letterchange/letterchange.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ContactComponent } from './contact/contact.component';
import { RolesComponent } from './roles/roles.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from  '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    PipeexampleComponent,
    SummaryPipe,
    LoginComponent,
    LetterchangeComponent,
    CapitalizePipe,
    SubscribeComponent,
    ContactComponent,
    RolesComponent,
    PostsComponent,
    NavbarComponent,
    PostComponent,
    AlbumsComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
