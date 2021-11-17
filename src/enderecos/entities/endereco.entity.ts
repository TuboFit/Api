import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, PrimaryGeneratedColumn, Generated } from "typeorm";
import { Pessoa } from "src/pessoas/entities/pessoa.entity";
import { v4 as uuid } from 'uuid';

@Entity("enderecos")
export class Endereco {

    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: string;

    @Column()
    logradouro: string

    @Column()
    numero: number

    @Column()
    bairro: string

    @Column()
    cidade: string

    @Column()
    uf: string

    @OneToOne(() => Pessoa, pessoa => pessoa.endereco)
    @JoinColumn()
    pessoa: Pessoa

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        this.id = this.setId();
    }

    private setId(): string {
        if (!this.id) {
            return this.id = uuid();
        }
        return this.id
    }
}
