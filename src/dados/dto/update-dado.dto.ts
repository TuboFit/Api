import { PartialType } from '@nestjs/mapped-types';
import { CreateDadosDto } from './create-dado.dto';

export class UpdateDadosDto extends PartialType(CreateDadosDto) { }
