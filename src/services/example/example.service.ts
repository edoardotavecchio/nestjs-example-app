import { Example } from "src/models/example.entity";
import { IExampleService } from "./example.interface";

export class ExampleService implements IExampleService{

    constructor(){}

    create() :Example {
        return new Example(1, "Edoardo Tavecchio", "Dati di prova");
    }
    
    read() :Example{
        return new Example(1, "Edoardo Tavecchio", "Dati di prova");
    }

    update() :Example{
        return new Example(1, "Edoardo Tavecchio", "Dati di prova");
    }

    delete() :void{
        return;
    }

    all(): Array<Example>{
        return [
            new Example(1, "Edoardo Tavecchio", "Dati di prova"),
            new Example(2, "Edoardo Tavecchio", "Secondo example")
        ];
    }
}