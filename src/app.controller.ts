/* eslint-disable prettier/prettier */
import {  Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getUser(): Array<any> {
  //   return this.appService.getUser();
  // }

  // @Get('/getid')
  // getUserbyId(@Query() user: any): any {
  //   return this.appService.getUserbyID(user.id);
  // }

  // @Post('/create')
  // create(@Body() user: any) {
  //   return this.appService.getNewUser(user);
  // }

  // @Put('/update')
  // update(@Body() user: any) {
  //   return this.appService.updateUser(user.id, user.newName);
  // }

  // @Delete('/delete')
  // delete(@Body() user: any) {
  //   return this.appService.deleteUser(user.id);
  // }
}
