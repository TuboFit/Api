import { PartialType } from '@nestjs/mapped-types';
import { Endereco } from '../entities/endereco.entity';
import { CreateDadosDto } from './create-dado.dto';

export class UpdateDadosDto extends PartialType(CreateDadosDto) { }
