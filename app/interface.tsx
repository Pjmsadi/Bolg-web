
export interface smiplifyProduct {
    _id: string;
    name: string;
    imageUrl: string;
    slug: string;
    description: string;
    price: number;
    categoryName: string;
    inStock: boolean;
}

export interface fullProduct {
    _id: string;
    name: string;
    imageUrl: string;
    slug: string;
    description: string;
    price: number;
    categoryName: string;
    inStock: boolean;
    images: string[];
}