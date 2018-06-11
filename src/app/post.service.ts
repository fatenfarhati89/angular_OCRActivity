import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import {Post} from './model/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsSubject = new Subject<any[]>();
  posts=[];

    constructor(private httpClient: HttpClient) { }
    emitPostSubject() {
      this.postsSubject.next(this.posts);
    }

    savePostsToServer() {
      this.httpClient
        .put('https://postproject-fa9a5.firebaseio.com/posts.json', this.posts)
        .subscribe(
          () => {
            console.log('Enregistrement terminé !');
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
  }
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
}

  createNewPost(newpost) {
    this.posts.push(newpost);
    this.savePostsToServer();
    firebase.database().ref('/posts/').set(this.posts).then(
  		()=> {
  			this.emitPostSubject();
  		});
  }

  getposts() {
    firebase.database().ref('/posts')
      .on('value', (data: any) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostSubject();
        }
      );
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPostSubject();
  }

 
}