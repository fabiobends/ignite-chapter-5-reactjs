import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: Array<{ id: number; price: number; priceFormatted: string; title: string }>;
  addToWishList: (id: number) => void;
  totalPrice: number;
};

export function SearchResults({ results, totalPrice, addToWishList }: SearchResultsProps) {
  return (
    <div>
      <h1>{totalPrice}</h1>
      {/* useMemo is worth it
        <Component totalPrice={totalPrice} />
        */}
      {results.map((result) => (
        <ProductItem
          key={result.id}
          product={result}
          addToWishList={addToWishList}
        />
      ))}
    </div>
  );
}
