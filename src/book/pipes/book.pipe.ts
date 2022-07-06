import { ArgumentMetadata,BadRequestException,PipeTransform } from "@nestjs/common";
import {plainToClass, plainToInstance} from 'class-transformer'
import { validate } from "class-validator";
import {Book} from '../data/book.dto'
// export class BookPipe implements PipeTransform{
//     async transform(value:any,metadata:ArgumentMetadata): Promise<any>{
//          const bookClass=plainToInstance(Book,value)
//          const errors=await validate(bookClass)
//          if(errors.length>0){
//             throw new BadRequestException("Validation failed"+JSON.stringify(errors))
//          }
//          console.log(value,typeof(value))
//          return value;

//     }
// }