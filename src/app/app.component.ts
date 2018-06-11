import { Component ,  OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {PostService} from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private postservice :PostService){
    var config = {
      apiKey: "AIzaSyBAe0gBjieqKppPpWXY3QpK1x9AEgoRqdY",
      authDomain: "postproject-fa9a5.firebaseapp.com",
      databaseURL: "https://postproject-fa9a5.firebaseio.com",
      projectId: "postproject-fa9a5",
      storageBucket: "postproject-fa9a5.appspot.com",
      messagingSenderId: "651243289141"
    };
    firebase.initializeApp(config);
  }
  ngOnInit(){
this.postservice.getposts();
  }
 
}
