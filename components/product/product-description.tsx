import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';
import { StarIcon } from '@heroicons/react/24/outline';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      <AddToCart product={product} />

      <div className="mt-6 flex flex-col space-y-2 lg:justify-between">
        <div className="flex items-center">
          <span className="mr-2 font-medium">Creator:</span>
          <span className="text-blue-600">{product.creator || 'Unknown'}</span>
        </div>

        <div className="flex items-center">
          <span className="mr-2 font-medium">Downloads:</span>
          <span>{product.downloads?.toLocaleString() || '0'}</span>
        </div>

        <div className="flex items-center">
          <span className="mr-2 font-medium">Rating:</span>
          <div className="flex items-center">
            <span className="mr-1">{product.rating || '0'}</span>
            <div className="flex text-yellow-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`h-4 w-4 ${star <= Math.round(product.rating || 0)
                      ? 'text-yellow-500'
                      : 'text-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
