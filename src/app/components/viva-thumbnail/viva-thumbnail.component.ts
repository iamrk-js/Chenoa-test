import { Component, Input, OnInit } from '@angular/core';
import { IVivas } from 'src/app/module/post';

@Component({
  selector: 'app-viva-thumbnail',
  templateUrl: './viva-thumbnail.component.html',
  styleUrls: ['./viva-thumbnail.component.scss']
})
export class VivaThumbnailComponent implements OnInit {
  @Input('viva') viva !: IVivas
  constructor() { }

  ngOnInit(): void {
  }

}
