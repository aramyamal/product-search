export interface SearchFilters {
  productName: string;
  priceRange: { min: number | undefined; max: number | undefined };
  volumeRange: { min: number | undefined; max: number | undefined };
  productId: string;
  productCategory: string;
  sortBy: "price" | "volume" | "stock" | "category";
  sortOrder: "ascending" | "descending";
  inStock: boolean;
}

export interface SearchFiltersForms {
  productName: string | null;
  lowPrice: string | null;
  highPrice: string | null;
  lowVolume: string | null;
  highVolume: string | null;
  productId: string | null;
  productCategory: string | null;
  sortBy: string | null;
  sortOrder: string | null;
  inStock: boolean | null;
}
