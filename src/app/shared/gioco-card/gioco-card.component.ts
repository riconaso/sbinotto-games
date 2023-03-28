import { Component, Input } from '@angular/core';
import { Gioco } from './../../models/gioco.model';

@Component({
  selector: 'app-gioco-card',
  templateUrl: './gioco-card.component.html',
  styleUrls: ['./gioco-card.component.scss']
})
export class GiocoCardComponent {
@Input() giochi: Gioco[]

}
