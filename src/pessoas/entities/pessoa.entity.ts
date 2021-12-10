import { Column, CreateDateColumn, Entity, Generated, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Contato } from "src/contatos/entities/contato.entity";
import { Endereco } from "src/enderecos/entities/endereco.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

@Entity("dados_pessoais")
export class Pessoa {

    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @OneToMany(() => Contato, contato => contato.pessoa, {
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

    @OneToOne(() => Usuario, {
        eager: true,
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn()
    usuario: Usuario;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
