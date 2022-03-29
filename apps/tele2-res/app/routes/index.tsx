import { getProducts, Product, ProductInterface } from '@tele2poc/products';
import type { MetaFunction, LoaderFunction } from 'remix';
import { useLoaderData, json, Link } from 'remix';

type IndexData = {
  products: ProductInterface[];
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders 
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  const data: IndexData = {
      products: getProducts()
  };
  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
        <h2>Products</h2>
        {data.products.map((product) => (
          <div key={product.id} className="remix__page__resource"><Product product={product} /></div>
        ))}
    </div>
  );
}
