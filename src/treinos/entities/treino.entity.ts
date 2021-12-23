import { type } from "os";
import { Professor } from "src/professores/entities/professores.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CreateTreinoDto } from "../dto/create-treino.dto";
import { UpdateTreinoDto } from "../dto/update-treino.dto";
import { Nivel } from "./Enum/Nivel";
import { Exercicio } from "./exercicios.entity";

@Entity("treinos")
export class Treino {
    @PrimaryGeneratedColumn("uuid")
    public readonly id: string;

    @Column({ nullable: true, default: 'Todos' })
    public grupMuscular: string;

    @Column({ nullable: true })
    public nome: string;

    @Column({ type: "enum", enum: Nivel, default: Nivel.INICIANTE })
    public nivel: string;

    @Column({ nullable: false })
    public crefProfessor: string

    @ManyToMany(type => Exercicio, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    exercicios: Exercicio[];

    constructor(treino: CreateTreinoDto | UpdateTreinoDto) {
        Object.assign(this, treino)
    }
}
