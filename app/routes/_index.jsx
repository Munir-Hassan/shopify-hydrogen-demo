import {getPaginationVariables} from '@shopify/hydrogen';
import FeaturedProducts from '~/components/FeaturedProducts';

export function meta() {
  return [
    {title: 'Hydrogen'},
    {description: 'A custom storefront powered by Hydrogen'},
  ];
}

export async function loader({context, request}) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 10,
  });
  const {products} = await context.storefront.query(PRODUCTS_QUERY, {
    variables: {
      ...paginationVariables,
    },
  });
  return {products};
}

export default function Index() {
  return (
    <section className="w-full gap-4">
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
        My Products
      </h2>
      <FeaturedProducts />
    </section>
  );
}

const PRODUCTS_QUERY = `
  #graphql
  query products(
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) {
    products(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor,
    ) {
        nodes {
          id
          title
          handle
          productType
          featuredImage {
            height
            width
            altText
            url
          }
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
        }
      }
  }
`;
