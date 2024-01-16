import { Example } from "src/models/example.entity";
import { CreateRecordDto, GetRecordDto, UpdateRecordDto, DeleteRecordDto } from "../../dtos/example/example.dto";

export interface IExampleService{
    create(request: CreateRecordDto) :Example;
    read(request: GetRecordDto) :Example;
    update(request: UpdateRecordDto) :Example;
    delete(request: DeleteRecordDto) :void;
    all() :Array<Example>;
}