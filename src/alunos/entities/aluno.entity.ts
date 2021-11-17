import { Entity, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne, OneToMany, PrimaryGeneratedColumn, Generated, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Pessoa } from '../../pessoas/entities/pessoa.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Treino } from "src/treinos/entities/treino.entity";

@Entity("alunos")
export class Aluno {

    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: string;

    @OneToOne(() => Pessoa, {
        eager: true,
        cascade: true,
        createForeignKeyConstraints: false
    })
    @JoinColumn()
    dados: Pessoa;

    @OneToOne(() => Usuario, {
        eager: true,
        cascade: true,
        createForeignKeyConstraints: false
    })
    @JoinColumn()
    usuario: Usuario;

    @Column()
    idade: number;

    @Column()
    peso: number;

    @Column()
    altura: number;

    @Column()
    genero: string;

    @Column({ type: "float" })
    imc: number;

    @Column({ type: "float" })
    tmb: number;

    @OneToMany(() => Treino, treino => treino.aluno, {
        eager: true,
        cascade: true,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
    })
    @JoinColumn()
    treino: Treino[];

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

    public getId(): string {
        return this.id
    }
}
