import { Category } from './category.interface';
import { Tag } from './tag.interface';

export interface Pet {
  id: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  status: 'available' | 'pending' | 'sold';
}
