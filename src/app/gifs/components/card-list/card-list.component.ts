import { Component, Input } from '@angular/core';
/* import { GifsService } from '../../services/gifs.service'; */
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html'
})

export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];

/*   constructor(private GifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.GifsService.gifList;
  } */

}
