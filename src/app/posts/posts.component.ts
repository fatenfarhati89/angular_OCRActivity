import { Component,OnDestroy, OnInit } from '@angular/core';
import {PostService} from '../post.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts :any[];
  postSubscription: Subscription;
  constructor(private postService: PostService){}
  

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }
 
  onSave() {
   this.postService.savePostsToServer();
 }  
 ngOnDestroy() {
  this.postSubscription.unsubscribe();
}

}
