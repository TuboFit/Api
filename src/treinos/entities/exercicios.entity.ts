import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CreateExercicioDto } from "../dto/create-exercicio.dto";

@Entity("exercicios")
export class Exercicio {
    @PrimaryGeneratedColumn("uuid")
    public readonly id: string;

    @Column()
    public nome: string;

    @Column({ nullable: true, default: 'all' })
    public dia: string;

    @Column()
    public grupMuscular: string;

    @Column()
    public numRepeticoes: string;

    @Column()
    public carga: string;

    @Column({ nullable: true })
    public obs: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(exercicio: CreateExercicioDto) {
        Object.assign(this, exercicio)
    }

}