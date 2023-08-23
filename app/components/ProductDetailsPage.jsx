import {Image} from '@shopify/hydrogen';
import React from 'react';

function ProductDetailsPage({productItem}) {
  console.log('PRODUCT ITEM: ', JSON.stringify(productItem));
  return (
    <section className="flex flex-row justify-start">
      <Image
        aspectRatio="1"
        className="w-96 h-96 rounded-md mr-6"
        width={productItem?.featuredImage.width}
        height={productItem?.featuredImage.height}
        src={productItem?.featuredImage.url}
        alt={`Image of ${productItem?.featuredImage.alttext}`}
        // crop="center"
      />
      <div>
        <h1 className="text-4xl font-bold leading-10 whitespace-normal mb-5">
          {productItem?.title}
        </h1>
        <p>{productItem?.description}</p>
        <p>Vendor: {productItem?.vendor}</p>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
