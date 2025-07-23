
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import  { Model } from "mongoose";
import { Todo } from "src/schemas/Todo.schema";
import { CreateTodoDto } from "./dto/CreateTodo.dto";
import { UpdateTodoDto } from "./dto/UpdateTodo.dto";

@Injectable()
export class TodosService {
    constructor(@InjectModel(Todo.name) private todomodel : Model<Todo> ) {}

    async getAll() {
        return await this.todomodel.find();
    }

    findOneById(id: string) {
        return this.todomodel.findById(id);
    }

    createTodo(createtodo : CreateTodoDto) {
        const todocreate = new this.todomodel(createtodo);
        return todocreate.save();
    }

    async update(id : string, updatetododto : UpdateTodoDto) {
        const todo = await this.todomodel.findByIdAndUpdate(id, updatetododto, {new : true});
        return todo;
    }

    async deletetodo(id : string) {
        const deletedtodo = await this.todomodel.findByIdAndDelete(id);
        return deletedtodo;
    }
}