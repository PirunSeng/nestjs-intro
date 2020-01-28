import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  add(
    @Body("title") prodTitle: string,
    @Body("desc") prodDesc: string,
    @Body("price") prodPrice: number
  ) {
    const generatedId = this.productService.add(prodTitle, prodDesc, prodPrice);
    return { id: generatedId };
  }

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get(":id")
  get(@Param("id") prodId: string) {
    return this.productService.get(prodId);
  }

  @Patch(":id")
  update(
    @Param("id") prodId: string,
    @Body("title") title: string,
    @Body("description") desc: string,
    @Body("price") price: number
  ) {
    this.productService.update(prodId, title, desc, price);
    return null;
  }

  @Delete(':id')
  delete(@Param('id') prodId: string) {
    this.productService.delete(prodId);
    return null;
  }
}
