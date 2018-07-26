import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PostService} from '../services/posts';
import {Post} from '../models/post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  Posts: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {this.Posts = posts;}
    );
    this.postService.emitPosts();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}
