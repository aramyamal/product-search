import { Injectable, signal } from '@angular/core';
import { SearchFilters, SearchFiltersForms } from '../model/search-filters.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchFiltersForm = new FormGroup({
    productName: new FormControl(""),
    lowPrice: new FormControl(""),
    highPrice: new FormControl(""),
    lowVolume: new FormControl(""),
    highVolume: new FormControl(""),
    productId: new FormControl(""),
    productCategory: new FormControl(""),
    sortBy: new FormControl("price"),
    sortOrder: new FormControl("ascending"),
    inStock: new FormControl(false)
  });

  private initialFilters: SearchFilters = {
    productName: "",
    priceRange: { min: undefined, max: undefined },
    volumeRange: { min: undefined, max: undefined },
    productId: "",
    productCategory: "",
    sortBy: "price",
    sortOrder: "ascending",
    inStock: false
  };

  searchFilters = signal<SearchFilters>(this.initialFilters);

  constructor() {
    // sync form changes with signal
    this.searchFiltersForm.valueChanges.subscribe(values => {
      this.updateFilters(values);
    });
  }

  updateFilters(values: Partial<SearchFiltersForms>): void {
    console.log(values)
    console.error("Not yet implemented")
  }

  getForm() {
    return this.searchFiltersForm;
  }

}
