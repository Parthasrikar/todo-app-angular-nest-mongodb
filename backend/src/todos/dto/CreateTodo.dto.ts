import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty() 
    @IsString()
    @MinLength(3)
    title : string;

    @IsNotEmpty() 
    @IsString()
    @MinLength(5)
    content : string;

    @IsBoolean()
    done : boolean;
}