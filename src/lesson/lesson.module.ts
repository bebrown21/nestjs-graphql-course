import { StudentModule } from './../student/student.module';
import { LessonService } from './lesson.service';
import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson]), StudentModule],
  controllers: [],
  providers: [LessonService, LessonResolver],
})
export class LessonModule {}
