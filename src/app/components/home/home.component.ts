import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
