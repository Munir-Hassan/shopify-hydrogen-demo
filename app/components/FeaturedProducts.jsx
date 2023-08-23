import {Pagination} from '@shopify/hydrogen';
import ProductCard from './ProductCard';
import {useLoaderData} from '@remix-run/react';

export default function FeaturedProducts() {
  const {products} = useLoaderData();
  return (
    <Pagination connection={products}>
      {({nodes, NextLink, PreviousLink, isLoading}) => (
        <>
          <div className="flex items-center justify-center mt-6 bg-green-300">
            <PreviousLink className="inline-block rounded font-medium text-center py-3 px-6 border w-full cursor-pointer">
              {isLoading ? 'Loading...' : 'Load previous products'}
            </PreviousLink>
          </div>
          <div className="grid grid-cols-5">
            {nodes.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
            <div className="flex items-center justify-center mt-6 bg-green-300">
              <NextLink className="inline-block rounded font-medium text-center py-3 px-6 border w-full cursor-pointer">
                {isLoading ? 'Loading...' : 'Load more products'}
              </NextLink>
            </div>
          </div>
        </>
      )}
    </Pagination>
  );
}
