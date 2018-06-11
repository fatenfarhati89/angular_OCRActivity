import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {Post} from '../model/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

   @Input() post: { 
   title: String,
   content: String,
   loveIts: number,
   created_at: Date };

  constructor(private postService: PostService) { }


  ngOnInit() {
  }

  onLove(){
    this.post.loveIts++;
    }

  onDontLove(){
    this.post.loveIts--;
}
onDeletePost(post: Post) {
  this.postService.removePost(post);
}
}
