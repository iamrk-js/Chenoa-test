import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/module/post';

@Component({
  selector: 'app-latest-blog-post',
  templateUrl: './latest-blog-post.component.html',
  styleUrls: ['./latest-blog-post.component.scss']
})
export class LatestBlogPostComponent implements OnInit {
  public posts : Ipost[] = [
    {
      title : 'Post Title',
      profile : 'Admin, domainname.com  Friday, 6th April 2000 ',
      info : 'Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.'
    },
    {
      title : 'Post Title',
      profile : 'Admin, domainname.com  Friday, 6th April 2000 ',
      info : 'Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
