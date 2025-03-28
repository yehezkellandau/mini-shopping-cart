export enum ProductStatus{
    "DRAFT" = "DRAFT",
    "PUBLISHED" = "PUBLISHED",
}

export type Product = {
    name: string;
    price:number;
    quantity:number;
    status: ProductStatus;
}