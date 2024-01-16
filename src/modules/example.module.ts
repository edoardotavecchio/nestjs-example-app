import { Module } from '@nestjs/common';
import { ExampleController } from '../controllers/example.controller';
import { Example } from 'src/models/example.entity';

@Module({
  imports: [Example],
  controllers: [ExampleController],
  providers: [],
})
export class ExampleModule {}
