import { Dados } from "src/dados/entities/dado.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CreateProfessorDto } from "../dto/create-professore.dto";
import { UpdateProfessorDto } from "../dto/update-professore.dto";

@Entity("professores")
export class Professor {
    @PrimaryGeneratedColumn('uuid')
    public readonly id: string

    @Column({ nullable: false, unique: true })
    public cref: string;

    @OneToOne(type => Dados, professor => Professor, {
        eager: true,
        cascade: ['insert', 'remove', 'soft-remove', 'update']
    })
    @JoinColumn()
    dados: Dados

    @OneToOne(type => Usuario, professor => Professor, {
        eager: true,
        cascade: ['insert', 'remove', 'soft-remove', 'update']
    })
    @JoinColumn()
    usuario: Usuario

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(professor: CreateProfessorDto | UpdateProfessorDto) {
        Object.assign(this, professor)
    }
}
