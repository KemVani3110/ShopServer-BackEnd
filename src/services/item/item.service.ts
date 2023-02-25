/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ItemModel } from 'src/models/item.model';

@Injectable()
export class ItemService {
    item: ItemModel[] = [
        {
          // eslint-disable-next-line prettier/prettier
          id: '1',
          name: 'Gà rán',
          dicription: 'Đây là cái đuồi gà rán'
    
        },
        {
          id: '2',
          name: 'Cơm gà',
          dicription: 'Đây là dĩa cơm gà'
        },
      ];
    
      getAll() : ItemModel[] {
        return this.item;
      }
    
      getItembyID(id: string): ItemModel[] {
        return this.item.filter(x => x.id === id);
      }
    
      getNewItem(items: ItemModel) {
        return this.item.push(items);
      }
    
      updateItem(items : ItemModel): string {
        // eslint-disable-next-line prefer-const
        let index = this.item.findIndex((x) => x.id === items.id);
        if (index === -1) {
          return 'Error';
        } else {
          this.item[index]= items;
          return 'Updated';
        }
      }
    
      deleteItem(id : string) {
        this.item = this.item.filter((x) => {
          return x.id !== id;
        });
        return this.item;
      }
}
