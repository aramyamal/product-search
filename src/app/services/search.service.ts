import { Injectable, signal } from '@angular/core';
import { SearchFilters, SearchFiltersForms, sortByType, sortOrderType } from '../model/search-filters.interface';
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
    sortOrder: new FormControl("asc"),
    inStock: new FormControl(false)
  });

  private initialFilters: SearchFilters = {
    productName: "",
    priceRange: { min: undefined, max: undefined },
    volumeRange: { min: undefined, max: undefined },
    productId: "",
    productCategory: "",
    sortBy: "price",
    sortOrder: "asc",
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
    this.searchFilters.set({
      productName: values.productName ? values.productName : "",
      priceRange: {
        min: values.lowPrice ? +values.lowPrice : 0,
        max: values.highPrice? +values.highPrice : -1
      },
      volumeRange: {
        min: values.lowVolume ? +values.lowVolume : 0,
        max: values.highVolume ? +values.highVolume : -1
      },
      productId: values.productId ? values.productId : "",
      productCategory: values.productCategory ? values.productCategory : "",
      sortBy: values.sortBy ? values.sortBy as sortByType : "price",
      sortOrder: values.sortOrder ? values.sortOrder as sortOrderType : "asc",
      inStock: values.inStock === true
    });
  }

  getForm() {
    return this.searchFiltersForm;
  }

}
