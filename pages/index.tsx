import type { NextPage } from 'next';
import { FormEvent, useCallback, useState } from 'react';
import SearchResults from '../components/SearchResults';
import { FormattedProduct } from '../interfaces/FormattedProducts';
import { Product } from '../interfaces/Product';
interface Results {
  totalPrice: number;
  data: FormattedProduct[];
}

const HomePage: NextPage = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Results>({} as Results);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    const res = await fetch(`http://localhost:3333/products?q=${search}`);
    const data: Product[] = await res.json();

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    const products: FormattedProduct[] = data.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price),
      };
    });

    const totalPrice = data.reduce(
      (total, product) => total + product.price,
      0
    );

    setResults({ totalPrice, data: products });
  };

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Buscar</button>

        <SearchResults
          results={results.data}
          totalPrice={results.totalPrice}
          onAddToWishList={addToWishList}
        />
      </form>
    </div>
  );
};

export default HomePage;
