import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
images:Array<string>=[
"assets/img/wp1.jpg",
"assets/img/wp7.png",
"assets/img/wp8.jpg",
"assets/img/wp9.jpg"
];
  constructor() { }

  ngOnInit() {
  }

}
