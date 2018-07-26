import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyDm-4BVb_khsiUTldbTXieLfkCpf7jIsLI',
      authDomain: 'blogs-11526.firebaseapp.com',
      databaseURL: 'https://blogs-11526.firebaseio.com',
      projectId: 'blogs-11526',
      storageBucket: '',
      messagingSenderId: '11838151316'
    };
    firebase.initializeApp(config);
  }
}
