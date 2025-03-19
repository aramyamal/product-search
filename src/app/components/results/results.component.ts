import { Component, inject } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-results', imports: [ItemCardComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {

  private searchService: SearchService = inject(SearchService);

  getSearchFiltersJson(): string {
    return JSON.stringify(this.searchService.searchFilters(), null, 2);
  }
}
