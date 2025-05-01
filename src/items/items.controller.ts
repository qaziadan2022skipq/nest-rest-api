import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemInterface } from './interfaces/item.interface';
import { Item } from './schema/item.schema';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getAllItems(): Promise<ItemInterface[]> {
    return this.itemsService.findAll();
  }

  @Post()
  async createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create({
      name: createItemDto.name,
      description: createItemDto.description,
      qty: createItemDto.qty,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id): Promise<string> {
    return this.itemsService.delete(id);
  }

  // @Put(':id')
  // updateItems(@Body() updatedItemsDto: CreateItemDto, @Param('id') id): string {
  //   return `
  //   Item No ${id}
  //   Items Details:
  //   ${updatedItemsDto.name}
  //   ${updatedItemsDto.description}
  //   ${updatedItemsDto.qty}
  //   `;
  // }
}
