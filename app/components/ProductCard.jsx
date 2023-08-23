import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import React from 'react';

function ProductCard({product}) {
  return (
    <Link to={`/products/${product.handle}`} className="" product={product}>
      <div className="m-1.5 rounded-md justify-center items-center flex-1">
        <Image
          aspectRatio="1"
          className="w-64 h-64 rounded-md"
          width={product.featuredImage.width}
          height={product.featuredImage.height}
          src={product.featuredImage.url}
          alt={`Image of ${product.featuredImage.alttext}`}
          // crop="center"
        />
        <h3 className="max-w-prose text-copy w-full overflow-hidden whitespace-nowrap text-ellipsis ">
          {product.title}
        </h3>
      </div>
    </Link>
  );
}

export default ProductCard;
