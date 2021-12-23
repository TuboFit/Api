import { CreateExercicioDto } from "../dto/create-exercicio.dto";
export declare class Exercicio {
    readonly id: string;
    nome: string;
    dia: string;
    grupMuscular: string;
    numRepeticoes: string;
    carga: string;
    obs: string;
    created_at: Date;
    updated_at: Date;
    constructor(exercicio: CreateExercicioDto);
}
