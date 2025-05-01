import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  getAllItems(): string {
    return 'All items are here';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `items ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Item Name: ${createItemDto.name}, Item desc: ${createItemDto.description}, Item Qty: ${createItemDto.qty}`;
  }

  @Delete(':id')
  deleteItem(@Param('id') id): string {
    return `Delete Item ${id}`;
  }

  @Put(':id')
  updateItems(@Body() updatedItemsDto: CreateItemDto, @Param('id') id): string {
    return `
    Item No ${id}
    Items Details:
    ${updatedItemsDto.name}
    ${updatedItemsDto.description}
    ${updatedItemsDto.qty}
    `;
  }
}
