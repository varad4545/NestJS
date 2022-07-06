import { NestFactory } from '@nestjs/core';
import { NextFunction,Request,Response } from 'express';
import { RootModule } from './root.module';

function globalMiddleWareOne(req:Request,res:Response,next:NextFunction){
  console.log('this is the global middleware 1')
  next()
}


function globalMiddleWareTwo(req:Request,res:Response,next:NextFunction){
  console.log('this is the global middleware 2')
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleWareOne)
  app.use(globalMiddleWareTwo)
  await app.listen(3000);
}
bootstrap();
