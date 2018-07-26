import {Post} from '../models/post';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class  PostService {
  Posts: Post[] = [];

  postSubject = new Subject<Post[]>();

  constructor() {this.loadPosts(); }

  emitPosts() {
    this.postSubject.next(this.Posts);
  }
  loadPosts() {
    firebase.database().ref('/posts').on('value', (data: DataSnapshot) => {
      this.Posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }
  savePosts() {
    firebase.database().ref('/posts').set(this.Posts);
  }

  newPost(post: Post) {
      this.Posts.push(post);
      this.savePosts();
      this.emitPosts();
  }

  removePost(post: Post) {
    const index = this.Posts.findIndex((p: Post) => {
      if (p === post) {return true; }
    });
    this.Posts.splice(index, 1);
    this.savePosts();
    this.emitPosts();
  }
  updatePostPluslovits(post: Post) {
    const index = this.Posts.findIndex((p: Post) => {
      if (p === post) {return true; }
    });
    this.Posts[index].loveits++;
    this.savePosts();
    this.emitPosts();
  }
  updatePostMinuslovits(post: Post) {
    const index = this.Posts.findIndex((p: Post) => {
      if (p === post) {return true; }
    });
    this.Posts[index].loveits--;
    this.savePosts();
    this.emitPosts();
  }

}
