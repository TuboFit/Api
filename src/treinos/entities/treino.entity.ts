import { Aluno } from "src/alunos/entities/aluno.entity";
import { Exercicio } from "src/exercicios/entities/exercicio.entity";
import { Professor } from "src/professores/entities/professor.entity";
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, JoinTable, JoinColumn, ManyToMany, OneToMany, ManyToOne, PrimaryGeneratedColumn, Generated, } from "typeorm";
import { v4 as uuidv4, } from 'uuid';

@Entity("treinos")
export class Treino {

    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: string;

    @ManyToOne(() => Aluno, aluno => aluno.treino, {
        onDelete: "NO ACTION",
        onUpdate: "CASCADE"
    })
    @JoinColumn()
    aluno: Aluno[];

    @ManyToOne(() => Professor, professor => professor.treinos)
    @JoinColumn()
    professor: Professor

    @Column({ nullable: false })
    grup_muscular: string;

    @Column()
    nivel: string;

    @Column()
    dia: string;

    @ManyToMany(() => Exercicio, exercicio => exercicio.treinos, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    exercicios: Exercicio[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        this.id = this.setId();
    }


    private setId(): string {
        if (!this.id) {
            return this.id = uuidv4();
        }
        return this.id
    }

    public getId(): string {
        return this.id
    }
}