import { Injectable } from '@nestjs/common';
import {Product, ProductProcessed} from "./interfaces/product.interface";

@Injectable()
export class PricesService {
    // private readonly prices: Product[] = [];
    private readonly prices: ProductProcessed[] = [];

    // add(product: Product) {
    //     this.prices.push(product);
    // }

    addTemp(product: ProductProcessed) {
        this.prices.push(product);
        console.log('debug added product. Prices now: ', this.prices)
    }


    findAll(): ProductProcessed[] {
        return this.prices;
    }
}
