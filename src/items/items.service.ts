import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './schema/item.schema';
import { Model } from 'mongoose';
import { ItemInterface } from './interfaces/item.interface';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private readonly itemModel: Model<Item>,
  ) {}

  async findAll(): Promise<ItemInterface[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    const itemFound = await this.itemModel.findOne({ _id: id });
    if (itemFound === null) return { name: '', description: '', qty: 0 };
    return itemFound;
  }

  async create(item: CreateItemDto): Promise<Item> {
    const itemCreated = await this.itemModel.create(item);
    return itemCreated;
  }

  async delete(id: string): Promise<string> {
    await this.itemModel.deleteOne({ _id: id });
    return 'Deleted';
  }

  // async update(id: string): Promise<Item> {
  //   return await this.itemModel.findOneAndUpdate({_id: id, name: })
  // }
}
