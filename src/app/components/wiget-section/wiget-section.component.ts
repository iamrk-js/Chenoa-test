import { Component, OnInit } from '@angular/core';
import { IVivas } from 'src/app/module/post';

@Component({
  selector: 'app-wiget-section',
  templateUrl: './wiget-section.component.html',
  styleUrls: ['./wiget-section.component.scss']
})
export class WigetSectionComponent implements OnInit {
  public vivas: IVivas[] = [
    {
      img:'../../../assets/images/thumbnailImg.png',
      heading : 'Vivamuslibero Augue',
      info : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.'
    },
    {
      img:'../../../assets/images/thumbnailImg.png',
      heading : 'Vivamuslibero Augue',
      info : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.'
    },
    {
      img:'../../../assets/images/thumbnailImg.png',
      heading : 'Vivamuslibero Augue',
      info : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.'
    },
    {
      img:'../../../assets/images/thumbnailImg.png',
      heading : 'Vivamuslibero Augue',
      info : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
