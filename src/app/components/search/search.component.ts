import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  private searchService = inject(SearchService);

  searchFiltersForm: FormGroup = this.searchService.getForm();

  getSortOrder(): string {
    const sortOrder: string | undefined =
      this.searchFiltersForm.get("sortOrder")?.value;

    if (sortOrder) {
      return sortOrder;
    } else {
      throw new Error("sortOrder form empty")
    }
  }

  toggleSortOrder() {
    const currentOrder = this.getSortOrder();
    const newOrder = currentOrder === 'ascending' ? 'descending' : 'ascending';

    this.searchFiltersForm.patchValue({ sortOrder: newOrder });
  }

}
