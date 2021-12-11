import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CreateDadosDto } from "../dto/create-dado.dto";
import { UpdateDadosDto } from "../dto/update-dado.dto";
import { Endereco } from "./endereco.entity";

@Entity("dados")
export class Dados {

    @PrimaryGeneratedColumn("uuid")
    public readonly id: string;

    @Column()
    public nome: string;

    @Column()
    public email: string;

    @Column()
    public telefone: string

    @Column()
    public cpf: string

    @OneToOne(type => Endereco, dados => Dados, {
        eager: true,
        cascade: true
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
