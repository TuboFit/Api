import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CreateTreinoDto } from "../dto/create-treino.dto";
import { Nivel } from "./Enum/Nivel";
import { Exercicio } from "./exercicios.entity";

@Entity("treinos")
export class Treino {
    @PrimaryGeneratedColumn("uuid")
    public readonly id: string;

    @Column({ nullable: false })
    public grupMuscular: string;

    @Column({ nullable: false })
    public dia: string;

    @Column({ type: "enum", enum: Nivel, default: Nivel.INICIANTE })
    public nivel: string;

    @ManyToMany(type => Exercicio, {
        eager: true, cascade: true
    })
    @JoinTable()
    exercicios: Exercicio[];

    constructor(treino: CreateTreinoDto) {
        Object.assign(this, treino)
    }
}
