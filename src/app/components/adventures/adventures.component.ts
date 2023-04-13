import { Adventure } from './../../interfaces/adventure';
import { AdventureService } from './../../services/adventure.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.scss']
})
export class AdventuresComponent {

  private _adventures: Adventure[] = [];

  constructor(public adventureService : AdventureService) {
    const adventures = adventureService.getAdventures().subscribe();
    if (adventures) {
      this._adventures = adventureService.adventures;
    }
  }
}
