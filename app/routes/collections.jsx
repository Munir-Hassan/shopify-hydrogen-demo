import {Link, useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import React from 'react';

export async function loader({context, params}) {
  // const {handle} = params;
  const {collections} = await context.storefront.query(COLLECTIONS_QUERY);

  return {collections};
}

function MyCollections() {
  const {collections} = useLoaderData();

  return (
    <section className="w-full gap-4">
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
        Collections
      </h2>
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-3">
        {collections.nodes.map((collection) => {
          return (
            <Link to={`/collections/${collection.handle}`} key={collection.id}>
              <div className="grid gap-4">
                {collection?.image && (
                  <Image
                    alt={`Image of ${collection.title}`}
                    data={collection.image}
                    key={collection.id}
                    sizes="(max-width: 32em) 100vw, 33vw"
                    crop="center"
                  />
                )}
                <h2 className="whitespace-pre-wrap max-w-prose font-medium text-copy">
                  {collection.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default MyCollections;

const COLLECTIONS_QUERY = `
  #graphql
  query FeaturedCollections {
    collections(first: 10) {
      nodes {
        id
        title
        handle
        description
        image {
            altText
            width
            height
            url
          }
      }
    }
  }
`;
