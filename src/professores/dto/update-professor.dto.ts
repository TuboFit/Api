import { PartialType } from '@nestjs/mapped-types';
import { ProfessorDto } from './Professor.dto';

export class UpdateProfessorDto extends PartialType(ProfessorDto) {
    cref: string;
}