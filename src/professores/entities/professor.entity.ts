import { Treino } from "src/treinos/entities/treino.entity";
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne, OneToMany, PrimaryGeneratedColumn, Generated } from "typeorm";

import { Pessoa } from "../../pessoas/entities/pessoa.entity";
import { CreateProfessorDto } from "../dto/create-professor.dto";
import { ProfessorDto } from "../dto/Professor.dto";


@Entity("professores")
export class Professor {

    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: string;

    @OneToOne(() => Pessoa, {
        eager: true,
        cascade: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    dados: Pessoa

    @Column({ nullable: false })
    cref: string


    @OneToMany(() => Treino, treino => treino.professor)
    @JoinColumn()
    treinos: Treino[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}