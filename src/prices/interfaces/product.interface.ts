import {Price} from "./price.interface";

export interface Product {
    store: string;
    item: string;
}

export interface ProductProcessed extends Product  {
    priceHistory: Price[]
}

