import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, PrimaryGeneratedColumn, Generated, OneToMany } from "typeorm";
import { Pessoa } from "src/pessoas/entities/pessoa.entity";
import { v4 as uuid } from 'uuid';

@Entity("contatos")
export class Contato {
    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: string;

    @Column({ nullable: false, unique: true })
    email: string

    @Column()
    telefone: string

    @OneToMany(() => Pessoa, pessoa => pessoa.contato, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
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