import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [
    {id: 1,
    label: 'F1 2022'},
    {id: 2,
      label: 'Crash Bandicoot'},
    {id: 3,
      label: 'Grand Theft Auto VI'},

  ];

  percorso = "../../../assets/images/carousel"
}
