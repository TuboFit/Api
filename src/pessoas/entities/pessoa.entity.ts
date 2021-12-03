import { Column, CreateDateColumn, Entity, Generated, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Contato } from "src/contatos/entities/contato.entity";
import { Endereco } from "src/enderecos/entities/endereco.entity";
import { v4 as uuidv4, } from 'uuid';

@Entity("dados_pessoais")
export class Pessoa {

    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @ManyToOne(() => Contato, contato => contato.pessoa, {
        eager: true,
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinTable()
    contato: Contato[];

    @OneToOne(() => Endereco, endereco => endereco.pessoa, {
        eager: true,
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinTable()
    endereco: Endereco;

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

}
