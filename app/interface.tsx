
/**
 * Represents a product in the smiplify system.
 * 
 * @interface smiplifyProduct
 * 
 * @property {string} _id - The unique identifier for the product.
 * @property {string} name - The name of the product.
 * @property {string} imageUrl - The URL of the product's image.
 * @property {string} slug - The slugified version of the product name, used in URLs.
 * @property {string} description - A detailed description of the product.
 * @property {number} price - The price of the product.
 * @property {string} categoryName - The name of the category to which the product belongs.
 * @property {boolean} inStock - Indicates whether the product is currently in stock.
 */
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