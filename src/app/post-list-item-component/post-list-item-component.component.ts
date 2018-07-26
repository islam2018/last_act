import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post';
import {PostService} from '../services/posts';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;
  constructor(private postservice: PostService) { }

  ngOnInit() {
  }
  onLove() {
    this.postservice.updatePostPluslovits(this.post);
  }
  onHate() {
    this.postservice.updatePostMinuslovits(this.post);
  }
  onDelete() {
    this.postservice.removePost(this.post);
  }

}
