import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list-component/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {PostService} from './post.service';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component'

const appRoutes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', component: PostsComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
