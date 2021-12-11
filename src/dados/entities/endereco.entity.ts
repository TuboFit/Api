import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CreateEnderecoDto } from "../dto/create-endereco.dto";
import { Dados } from "./dado.entity";

@Entity("enderecos")
export class Endereco {
    @PrimaryGeneratedColumn("uuid")
    public readonly id: string;

    @OneToOne(type => Dados, endereco => Endereco)
    dados: Dados

    @Column()
    public logradouro: string;

    @Column()
    public numero: string;

    @Column()
    public bairro: string;

    @Column()
    public cidade: string;

    @Column()
    public uf: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(endereco: CreateEnderecoDto) {
        Object.assign(this, endereco)
    }

}