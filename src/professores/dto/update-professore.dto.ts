import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessorDto } from './create-professore.dto';

export class UpdateProfessorDto extends PartialType(CreateProfessorDto) { }
