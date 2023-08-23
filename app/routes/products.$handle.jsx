import {useLoaderData} from '@remix-run/react';
import React from 'react';
import ProductDetailsPage from '~/components/ProductDetailsPage';

export async function loader({context, params}) {
  const {handle} = params;
  const {product} = await context.storefront.query(PRODUCT_DETAILS_QUERY, {
    variables: {
      handle,
    },
  });
  if (!product?.id) {
    throw new Response('Product Not Found!', {status: 404});
  }

  return {product};
}

function ProductDetails() {
  const {product} = useLoaderData();
  return <ProductDetailsPage productItem={product} />;
}

export default ProductDetails;

const PRODUCT_DETAILS_QUERY = `
  #graphql
  query ProductDetails($handle: String!) {
    product(handle: $handle) {
      id
      description
      title
      handle
      featuredImage {
        height
        width
        altText
        url
      }
      totalInventory
      vendor
      descriptionHtml
    }
  }
`;
