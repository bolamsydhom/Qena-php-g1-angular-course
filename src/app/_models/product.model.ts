export interface Product {
    id: number,
    name: string,
    price: number,
    discount?: number,
    imageUrl: string,
    description: string
}