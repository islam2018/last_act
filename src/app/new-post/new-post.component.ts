import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Post} from '../models/post';
import {PostService} from '../services/posts';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newpostForm: FormGroup;
  errmsg: string;

  constructor(private postservice: PostService, private formbuilder: FormBuilder, private router: Router) {
  }

  initForm() {
    this.newpostForm = this.formbuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onAdd() {
    const val = this.newpostForm.value;
    const post = new Post(val['title'], val['content'], 0, (new Date()).toString());
    this.postservice.newPost(post);
    this.router.navigate(['posts']);
  }

  ngOnInit() {
    this.initForm();
  }

}
