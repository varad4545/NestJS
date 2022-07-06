import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";
@Injectable()
export class BookMiddleware implements NestMiddleware{
    use(req: any, res: any, next: NextFunction) {
        console.log("This is class based middleware implemented for book module")
        next()
    }

}