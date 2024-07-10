import { Module } from '@nestjs/common';
import {PricesController} from "./prices.controller";
import {PricesService} from "./prices.service";

@Module({
    controllers: [PricesController],
    providers: [PricesService]
})
export class PricesModule {}
