import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserController } from './users/users.constroller';
import { UserModule } from './users/users.module';


@Module({
  imports: [BookModule,UserModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class RootModule {
  constructor(){
    console.log('App Module')
  }
}
