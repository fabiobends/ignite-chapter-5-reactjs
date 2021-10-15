import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: Array<{ id: number; price: number; title: string }>;
};

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, result) => {
      return total + result.price;
    }, 0);
  }, []);

  return (
    <div>
      {/* useMemo is worth it
        <Component totalPrice={totalPrice} />
        */}
      {results.map((result) => (
        <ProductItem key={result.id} product={result} />
      ))}
    </div>
  );
}
