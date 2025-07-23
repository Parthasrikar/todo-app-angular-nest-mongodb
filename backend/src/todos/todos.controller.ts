import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { NotFoundException, BadRequestException } from '@nestjs/common';

import { TodosService } from "./todos.service";
import  mongoose, { Error } from "mongoose";
import { CreateTodoDto } from "./dto/CreateTodo.dto";
import { UpdateTodoDto } from "./dto/UpdateTodo.dto";


@Controller('todo')
export class TodoController {
    constructor(private readonly todoservice : TodosService) {}

    @Get() 
    getAllTodos() {
        return this.todoservice.getAll();
    }

    @Get(':id') 
    async getTodoById(@Param('id') id : string) {
        const isvalidid = mongoose.Types.ObjectId.isValid(id);
        if (!isvalidid) throw new BadRequestException('Invalid ID');
        const todo = await this.todoservice.findOneById(id);
        if (!todo) throw new NotFoundException('No todo found');
        return todo; 
    }

    @Post()
    createTodoById(@Body() createTodo : CreateTodoDto) {
        return this.todoservice.createTodo(createTodo);
    }

    @Patch(':id')
    editTodo(@Param('id') id : string, @Body() updatetododto : UpdateTodoDto) {
        const isvalidid = mongoose.Types.ObjectId.isValid(id);
        if (!isvalidid) throw new BadRequestException('Invalid ID');
        const updatedtodo = this.todoservice.update(id, updatetododto);
        return updatedtodo;
    }

    @Delete(':id')
    deleteTodo(@Param('id') id : string) {
        const isvalidid = mongoose.Types.ObjectId.isValid(id);
        if (!isvalidid) throw new BadRequestException('Invalid ID');
        return this.todoservice.deletetodo(id);
    }
}