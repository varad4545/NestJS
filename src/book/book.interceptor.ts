import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { nextTick } from "process";
import { Observable } from "rxjs";
import {Request,Response} from 'express'

@Injectable()
export class AppInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>{
        console.log("this is the intercept")
    const ctx=context.switchToHttp();
    const request=ctx.getRequest<Request>()
    request.body.name="this is the name"
    return next.handle()
    }
}