import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CreateDadosDto } from "../dto/create-dado.dto";
import { UpdateDadosDto } from "../dto/update-dado.dto";
import { Endereco } from "./endereco.entity";

@Entity("dados")
export class Dados {

    @PrimaryGeneratedColumn("uuid")
    public readonly id: string;

    @Column({ length: "90", nullable: false })
    public nome: string;

    @Column({ nullable: false })
    public email: string;

    @Column({ length: 12 })
    public telefone: string

    @Column({ nullable: false, unique: true, length: 15 })
    public cpf: string

    @OneToOne(type => Endereco, dados => Dados, {
        eager: true,
        cascade: ['insert', 'remove', 'soft-remove', 'update']
    })
    @JoinColumn()
    endereco: Endereco;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(dados: CreateDadosDto | UpdateDadosDto) {
        Object.assign(this, dados)
    }
}
