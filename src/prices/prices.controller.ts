import { Controller, Get } from '@nestjs/common';
import {PricesService} from "./prices.service";
import {ProductProcessed} from "./interfaces/product.interface";

@Controller('prices')
export class PricesController {
    constructor(private readonly pricesService: PricesService) {}

    @Get()
    test(): string {
        return 'test'
    }

    async findAll(): Promise<ProductProcessed[]> {
        return this.pricesService.findAll()
    }
}
