import { UpdateProductDto } from './../products/dto/update-product.dto';
import { Product, ProductDocument } from './../products/schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './../products/dto/create-product.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class ProductsServiceService {
   constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument> ) {

   }

   async getAll(): Promise <Product[]>{
        return this.productModel.find().exec()
    }

    async getById(id: string): Promise <Product> {
        return this.productModel.findById(id)
    }

    async create(productDto: CreateProductDto): Promise<Product> {
        const newProduct = new this.productModel(productDto)
        return newProduct.save()
    }

    async remove(id: string): Promise<Product> {
        return this.productModel.findByIdAndRemove(id)
    }
    
    async update(id: string, productDto: UpdateProductDto): Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, productDto, {new: true})
    }
}
