import { Module } from "@nestjs/common";
import { UserController } from "./users.constroller";


@Module({
    imports:[],
    controllers:[UserController],
    providers:[],
})
export class UserModule{}