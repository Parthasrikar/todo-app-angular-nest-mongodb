import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Todo {
    @Prop({required : true})
    title : string;

    @Prop({required : true})
    content : string;

    @Prop({default: false, required : true})
    done : boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);