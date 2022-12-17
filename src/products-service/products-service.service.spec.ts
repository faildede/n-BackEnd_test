import { Test, TestingModule } from '@nestjs/testing';
import { ProductsServiceService } from './products-service.service';

describe('ProductsServiceService', () => {
  let service: ProductsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsServiceService],
    }).compile();

    service = module.get<ProductsServiceService>(ProductsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
