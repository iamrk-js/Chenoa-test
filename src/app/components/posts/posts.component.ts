import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/module/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input('post') post !:Ipost ;
  constructor() { }

  ngOnInit(): void {
  }

}
