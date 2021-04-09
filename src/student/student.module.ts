import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [],
  providers: [StudentService, StudentResolver],
  exports: [StudentService]
})
export class StudentModule {}
