import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateRecordDto{

    @IsString()
    @IsNotEmpty()
    author: String;

    @IsString()
    @IsNotEmpty()
    data: String;
}

export class GetRecordDto{
    @IsNumber()
    id: number;

    @IsString()
    author: String;

    @IsString()
    data: String;
}

export class UpdateRecordDto{
    @IsString()
    @IsOptional()
    author: String;
    
    @IsString()
    @IsOptional()
    data: String;
}

export class DeleteRecordDto{
    @IsNumber()
    id: number;
}