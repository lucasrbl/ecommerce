import product1 from '../../assets/images/image-product-1.jpg';
import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import product2 from '../../assets/images/image-product-2.jpg';
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import product3 from '../../assets/images/image-product-3.jpg';
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import product4 from '../../assets/images/image-product-4.jpg';
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';

type ProductsImagesObjectType = {
  default: string;
  thumbnail: string;
};

export const productsImages: ProductsImagesObjectType[] = [
  {
    default: product1,
    thumbnail: thumbnail1,
  },

  {
    default: product2,
    thumbnail: thumbnail2,
  },

  {
    default: product3,
    thumbnail: thumbnail3,
  },

  {
    default: product4,
    thumbnail: thumbnail4,
  },
];
