import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.type';

@Resolver((of) => Student)
export class StudentResolver {
  constructor(
    @InjectRepository(Student) private lessonRepository: Repository<Student>,
    private studentService: StudentService,
  ) {}

  @Query(returns => [Student])
  getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();
  } 

  @Query(returns => Student)
  getStudent(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudent(id);
  } 

  @Mutation(returns => Student)
  createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput): Promise<Student> {
    return this.studentService.createStudent(createStudentInput);
  }
}
