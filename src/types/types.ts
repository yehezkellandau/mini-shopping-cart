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
export type StateNameType = "name" | "price" | "quantity" | "status";
export type OnChangeType = (stateName: StateNameType, value: string) => void;
export type AddToCartType = (product: Product) => void;