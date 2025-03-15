// lib/mock-data/index.js
export const products = [
  {
    id: 'product-1',
    handle: 'digital-artwork-1',
    availableForSale: true,
    title: 'Digital Artwork #1',
    description: 'A beautiful digital artwork with vibrant colors.',
    descriptionHtml: '<p>A beautiful digital artwork with vibrant colors.</p>',
    options: [
      {
        id: 'option-1',
        name: 'Size',
        values: ['Small', 'Medium', 'Large']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '0.5',
        currencyCode: 'ETH'
      },
      minVariantPrice: {
        amount: '0.1',
        currencyCode: 'ETH'
      }
    },
    variants: [
      {
        id: 'variant-1',
        title: 'Small',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Size',
            value: 'Small'
          }
        ],
        price: {
          amount: '0.1',
          currencyCode: 'ETH'
        }
      },
      {
        id: 'variant-2',
        title: 'Medium',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Size',
            value: 'Medium'
          }
        ],
        price: {
          amount: '0.3',
          currencyCode: 'ETH'
        }
      },
      {
        id: 'variant-3',
        title: 'Large',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Size',
            value: 'Large'
          }
        ],
        price: {
          amount: '0.5',
          currencyCode: 'ETH'
        }
      }
    ],
    featuredImage: {
      url: 'https://picsum.photos/id/1/600/400',
      altText: 'Digital Artwork #1',
      width: 600,
      height: 400
    },
    images: [
      {
        url: 'https://picsum.photos/id/1/600/400',
        altText: 'Digital Artwork #1',
        width: 600,
        height: 400
      },
      {
        url: 'https://picsum.photos/id/2/600/400',
        altText: 'Digital Artwork #1 - View 2',
        width: 600,
        height: 400
      }
    ],
    seo: {
      title: 'Digital Artwork #1',
      description: 'A beautiful digital artwork with vibrant colors.'
    },
    tags: ['digital', 'art'],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'product-2',
    handle: 'nft-collection-alpha',
    availableForSale: true,
    title: 'NFT Collection Alpha',
    description: 'Limited edition NFT collection.',
    descriptionHtml: '<p>Limited edition NFT collection.</p>',
    options: [
      {
        id: 'option-2',
        name: 'Rarity',
        values: ['Common', 'Rare', 'Legendary']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '2.0',
        currencyCode: 'ETH'
      },
      minVariantPrice: {
        amount: '0.2',
        currencyCode: 'ETH'
      }
    },
    variants: [
      {
        id: 'variant-4',
        title: 'Common',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Rarity',
            value: 'Common'
          }
        ],
        price: {
          amount: '0.2',
          currencyCode: 'ETH'
        }
      },
      {
        id: 'variant-5',
        title: 'Rare',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Rarity',
            value: 'Rare'
          }
        ],
        price: {
          amount: '0.8',
          currencyCode: 'ETH'
        }
      },
      {
        id: 'variant-6',
        title: 'Legendary',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Rarity',
            value: 'Legendary'
          }
        ],
        price: {
          amount: '2.0',
          currencyCode: 'ETH'
        }
      }
    ],
    featuredImage: {
      url: 'https://picsum.photos/id/3/600/400',
      altText: 'NFT Collection Alpha',
      width: 600,
      height: 400
    },
    images: [
      {
        url: 'https://picsum.photos/id/3/600/400',
        altText: 'NFT Collection Alpha',
        width: 600,
        height: 400
      },
      {
        url: 'https://picsum.photos/id/4/600/400',
        altText: 'NFT Collection Alpha - View 2',
        width: 600,
        height: 400
      }
    ],
    seo: {
      title: 'NFT Collection Alpha',
      description: 'Limited edition NFT collection.'
    },
    tags: ['nft', 'collection'],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'product-3',
    handle: 'metaverse-land',
    availableForSale: true,
    title: 'Metaverse Land Parcel',
    description: 'Own a piece of the metaverse with this prime land parcel.',
    descriptionHtml: '<p>Own a piece of the metaverse with this prime land parcel.</p>',
    options: [
      {
        id: 'option-3',
        name: 'Location',
        values: ['Downtown', 'Suburbs', 'Wilderness']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '5.0',
        currencyCode: 'ETH'
      },
      minVariantPrice: {
        amount: '1.0',
        currencyCode: 'ETH'
      }
    },
    variants: [
      {
        id: 'variant-7',
        title: 'Downtown',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Location',
            value: 'Downtown'
          }
        ],
        price: {
          amount: '5.0',
          currencyCode: 'ETH'
        }
      },
      {
        id: 'variant-8',
        title: 'Suburbs',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Location',
            value: 'Suburbs'
          }
        ],
        price: {
          amount: '2.5',
          currencyCode: 'ETH'
        }
      },
      {
        id: 'variant-9',
        title: 'Wilderness',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Location',
            value: 'Wilderness'
          }
        ],
        price: {
          amount: '1.0',
          currencyCode: 'ETH'
        }
      }
    ],
    featuredImage: {
      url: 'https://picsum.photos/id/5/600/400',
      altText: 'Metaverse Land Parcel',
      width: 600,
      height: 400
    },
    images: [
      {
        url: 'https://picsum.photos/id/5/600/400',
        altText: 'Metaverse Land Parcel',
        width: 600,
        height: 400
      },
      {
        url: 'https://picsum.photos/id/6/600/400',
        altText: 'Metaverse Land Map',
        width: 600,
        height: 400
      }
    ],
    seo: {
      title: 'Metaverse Land Parcel',
      description: 'Own a piece of the metaverse with this prime land parcel.'
    },
    tags: ['metaverse', 'land', 'virtual'],
    updatedAt: new Date().toISOString()
  }
];

export const collections = [
  {
    handle: 'digital-art',
    title: 'Digital Art',
    description: 'Beautiful digital artworks',
    seo: {
      title: 'Digital Art Collection',
      description: 'Explore our digital art collection'
    },
    updatedAt: new Date().toISOString(),
    path: '/search/digital-art'
  },
  {
    handle: 'nft-collections',
    title: 'NFT Collections',
    description: 'Limited edition NFT collections',
    seo: {
      title: 'NFT Collections',
      description: 'Explore our limited edition NFT collections'
    },
    updatedAt: new Date().toISOString(),
    path: '/search/nft-collections'
  },
  {
    handle: 'metaverse-assets',
    title: 'Metaverse Assets',
    description: 'Virtual assets for the metaverse',
    seo: {
      title: 'Metaverse Assets',
      description: 'Explore our virtual assets for the metaverse'
    },
    updatedAt: new Date().toISOString(),
    path: '/search/metaverse-assets'
  }
];

export const menus = {
  'next-js-frontend-header-menu': [
    {
      title: 'Digital Art',
      path: '/search/digital-art'
    },
    {
      title: 'NFT Collections',
      path: '/search/nft-collections'
    },
    {
      title: 'Metaverse Assets',
      path: '/search/metaverse-assets'
    }
  ],
  'next-js-frontend-footer-menu': [
    {
      title: 'About Us',
      path: '/about'
    },
    {
      title: 'Terms of Service',
      path: '/terms'
    },
    {
      title: 'Privacy Policy',
      path: '/privacy'
    }
  ]
};

export const pages = [
  {
    id: 'page-1',
    title: 'About Us',
    handle: 'about',
    body: '<h1>About Our NFT Marketplace</h1><p>We are dedicated to bringing you the best digital assets.</p>',
    bodySummary: 'We are dedicated to bringing you the best digital assets.',
    seo: {
      title: 'About Us',
      description: 'Learn more about our NFT marketplace'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'page-2',
    title: 'Terms of Service',
    handle: 'terms',
    body: '<h1>Terms of Service</h1><p>Please read our terms of service carefully.</p>',
    bodySummary: 'Please read our terms of service carefully.',
    seo: {
      title: 'Terms of Service',
      description: 'Terms of service for our NFT marketplace'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'page-3',
    title: 'Privacy Policy',
    handle: 'privacy',
    body: '<h1>Privacy Policy</h1><p>Your privacy is important to us.</p>',
    bodySummary: 'Your privacy is important to us.',
    seo: {
      title: 'Privacy Policy',
      description: 'Privacy policy for our NFT marketplace'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Initialize with an empty cart
let mockCart = {
  id: 'cart-1',
  checkoutUrl: '/checkout',
  totalQuantity: 0,
  lines: [],
  cost: {
    subtotalAmount: { amount: '0', currencyCode: 'ETH' },
    totalAmount: { amount: '0', currencyCode: 'ETH' },
    totalTaxAmount: { amount: '0', currencyCode: 'ETH' }
  }
};

// Helper function to recalculate cart totals
export const recalculateCart = () => {
  let totalQuantity = 0;
  let subtotalAmount = 0;

  mockCart.lines.forEach(line => {
    totalQuantity += line.quantity;
    subtotalAmount += parseFloat(line.cost.totalAmount.amount);
  });

  mockCart.totalQuantity = totalQuantity;
  mockCart.cost.subtotalAmount.amount = subtotalAmount.toString();
  mockCart.cost.totalAmount.amount = subtotalAmount.toString();
  
  return {...mockCart};
};

export const getCart = () => {
  return Promise.resolve(mockCart);
};

export const createCart = () => {
  mockCart = {
    id: 'cart-' + Date.now(),
    checkoutUrl: '/checkout',
    totalQuantity: 0,
    lines: [],
    cost: {
      subtotalAmount: { amount: '0', currencyCode: 'ETH' },
      totalAmount: { amount: '0', currencyCode: 'ETH' },
      totalTaxAmount: { amount: '0', currencyCode: 'ETH' }
    }
  };
  return Promise.resolve(mockCart);
};

export const addToCart = (lines) => {
  lines.forEach(line => {
    const { merchandiseId, quantity } = line;
    
    // Find the product variant
    let variant = null;
    let product = null;
    
    for (const p of products) {
      const v = p.variants.find(v => v.id === merchandiseId);
      if (v) {
        variant = v;
        product = p;
        break;
      }
    }
    
    if (!variant || !product) return;
    
    // Check if the item is already in the cart
    const existingLineIndex = mockCart.lines.findIndex(l => l.merchandise.id === merchandiseId);
    
    if (existingLineIndex !== -1) {
      // Update existing line
      mockCart.lines[existingLineIndex].quantity += quantity;
      mockCart.lines[existingLineIndex].cost.totalAmount.amount = 
        (parseFloat(variant.price.amount) * mockCart.lines[existingLineIndex].quantity).toString();
    } else {
      // Add new line
      mockCart.lines.push({
        id: `line-${Date.now()}`,
        quantity,
        cost: {
          totalAmount: {
            amount: (parseFloat(variant.price.amount) * quantity).toString(),
            currencyCode: variant.price.currencyCode
          }
        },
        merchandise: {
          id: merchandiseId,
          title: variant.title,
          selectedOptions: variant.selectedOptions,
          product: {
            id: product.id,
            handle: product.handle,
            title: product.title,
            featuredImage: product.featuredImage
          }
        }
      });
    }
  });
  
  return Promise.resolve(recalculateCart());
};

export const removeFromCart = (lineIds) => {
  mockCart.lines = mockCart.lines.filter(line => !lineIds.includes(line.id));
  return Promise.resolve(recalculateCart());
};

export const updateCart = (lines) => {
  lines.forEach(line => {
    const { id, quantity } = line;
    const lineIndex = mockCart.lines.findIndex(l => l.id === id);
    
    if (lineIndex !== -1) {
      const variant = mockCart.lines[lineIndex].merchandise;
      
      // Find the product variant price
      let variantPrice = 0;
      for (const p of products) {
        const v = p.variants.find(v => v.id === variant.id);
        if (v) {
          variantPrice = parseFloat(v.price.amount);
          break;
        }
      }
      
      mockCart.lines[lineIndex].quantity = quantity;
      mockCart.lines[lineIndex].cost.totalAmount.amount = (variantPrice * quantity).toString();
    }
  });
  
  return Promise.resolve(recalculateCart());
};