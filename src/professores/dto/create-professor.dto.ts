import { Pessoa } from "src/pessoas/entities/pessoa.entity";
import { ProfessorDto } from "./Professor.dto";

export class CreateProfessorDto extends ProfessorDto {
    cref: string;
    dados: Pessoa;
}