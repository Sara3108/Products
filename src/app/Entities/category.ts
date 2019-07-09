import { Product } from './product';

export class Category{
    id: number;
    rootCategoryId:number;
    name:string;
    product?: Product[];
}