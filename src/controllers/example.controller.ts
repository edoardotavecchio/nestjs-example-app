import { Controller, Get, Post, Put, Delete, Inject } from "@nestjs/common";
import { CreateRecordDto, DeleteRecordDto, GetRecordDto, UpdateRecordDto } from "src/dtos/example/example.dto";
import { Example } from "src/models/example.entity";
import { IExampleService } from "src/services/example/example.interface";

@Controller('/example')
export class ExampleController{
    constructor(@Inject() private service: IExampleService ){}

    @Post()
    create(request: CreateRecordDto): Example{
        return this.service.create(request);
    }

    @Get()
    read(request: GetRecordDto): Example{
        return this.service.read(request);
    }

    @Put()
    update(request: UpdateRecordDto): Example{
        return this.service.update(request);
    }

    @Delete()
    delete(request: DeleteRecordDto): void{
        return this.service.delete(request);
    }

    @Get('/all')
    all(): Array<Example>{
        return this.service.all();
    }
}