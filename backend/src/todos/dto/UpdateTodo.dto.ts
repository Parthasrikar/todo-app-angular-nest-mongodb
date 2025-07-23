/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateTodoDto {
    @IsOptional()
    @IsNotEmpty() 
    @IsString()
    @MinLength(3)
    title : string;

    @IsOptional()
    @IsNotEmpty() 
    @IsString()
    @MinLength(5)
    content : string;

    @IsOptional()
    done : boolean;
}