import { Category } from "./category.model";
import { PaymentType } from "./payment-type.model";
import { ProductLang } from "./product-lang.model";
import { Tag } from "./tags.model";

export interface Product {
    _id?: number,
    data: ProductLang[],
    price: number,
    discount?: number,
    imagesUrls: string[],
    category: Category,
    paymentTypes: PaymentType[],
    tags: Tag[]
}