import { Controller, Get, Post } from "@nestjs/common";


@Controller('users')
export class UserController{
    @Get()
    findAllUser():string{
        return 'This api will return all users'
    }
    @Post()
    addUser():string{
        return "This api will add user"
    }
}