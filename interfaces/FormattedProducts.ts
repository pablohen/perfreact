import { Product } from './Product';

export interface FormattedProduct extends Product {
  priceFormatted: string;
}
