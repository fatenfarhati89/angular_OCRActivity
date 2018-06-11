import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PostService} from '../post.service';
import {Post} from '../model/post';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  post: Post;
  
  constructor(private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
  
  onSaveBook() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const created_at= String(Date.now());
    const loveIts=-1;

    const newPost = new Post(title);
    newPost.content=content;
    newPost.created_at=created_at;
    newPost.loveIts=0;
    console.log(newPost);
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
