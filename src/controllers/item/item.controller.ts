import { ItemModel } from './../../models/item.model';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ItemService } from './../../services/item/item.service';
/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post, Put, Delete, Query } from '@nestjs/common';

@Controller('item')
export class ItemController {
    constructor(private ItemService: ItemService)
    {

    }

   @Get('')
   getAll()
   {
    return this.ItemService.getAll();
   }
   
   @Get('/getid')
   getItemByID(@Body() item)
   {
    return this.ItemService.getItembyID(item.id);
   }
   
   @Post('/create')
   createItem(@Body() item: ItemModel)
   {
    return this.ItemService.getNewItem(item);
   }

   @Put('/update')
   updateItem(@Body() item: ItemModel){
    return this.ItemService.updateItem(item);
   }

   @Delete('/delete')
   deleteItem(@Query('id') id: string)
   {
    return this.ItemService.deleteItem(id);
   }
}
