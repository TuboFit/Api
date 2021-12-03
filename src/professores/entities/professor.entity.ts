import { Treino } from "src/treinos/entities/treino.entity";
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne, OneToMany, PrimaryGeneratedColumn, Generated } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Pessoa } from "../../pessoas/entities/pessoa.entity";
import { Usuario } from "../../usuarios/entities/usuario.entity";

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

    @OneToOne(() => Usuario, {
        eager: true,
        cascade: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    usuario: Usuario

    @OneToMany(() => Treino, treino => treino.professor)
    @JoinColumn()
    treinos: Treino[]

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