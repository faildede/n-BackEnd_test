import { Product } from './schemas/product.schema';
import { ProductsServiceService } from './../products-service/products-service.service';
import { HttpStatus } from '@nestjs/common/enums';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { Controller, Get } from '@nestjs/common';
import { Body, Delete, Header, HttpCode, Param, Post, Put, Redirect, Req, Res } from '@nestjs/common/decorators';
import { Response, Request } from '@nestjs/common/decorators';


@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsServiceService) {

    }

    @Get()
    getAll():Promise<Product[]> {
        return this.productService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id:string):Promise<Product>{
        return this.productService.getById(id)
    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() CreateProductDto:CreateProductDto):Promise<Product> {
        return this.productService.create(CreateProductDto)
    }   

    @Delete(':id')
    remove(@Param('id') id:string):Promise<Product> {
        return this.productService.remove(id)
    }

    @Put(':id') 
    update(@Body() UpdateProductDto: UpdateProductDto, @Param('id') id:string ):Promise<Product> {
        return this.productService.update(id, UpdateProductDto)
    }
}
