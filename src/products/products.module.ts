import { Module } from "@nestjs/common";
import { Product, ProductSchema } from './schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsServiceService } from './../products-service/products-service.service';

@Module({
    providers: [ProductsServiceService],
    controllers: [ProductsController],
    imports: [
        MongooseModule.forFeature([
            {name: Product.name, schema: ProductSchema}
        ])
    ]
})

export class ProductsModule {

}