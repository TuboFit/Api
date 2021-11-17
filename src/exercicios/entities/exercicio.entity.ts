import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, PrimaryGeneratedColumn, Generated } from "typeorm";
import { v4 as uuidv4, } from 'uuid';
import { Treino } from "../../treinos/entities/treino.entity";

@Entity("exercicios")
export class Exercicio {

    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: string;

    @Column({ nullable: false })
    nome: string;

    @Column({ nullable: false })
    grup_muscular: string;

    @Column({ nullable: false })
    num_repeticoes: string;

    @Column()
    carga: string;

    @Column({ length: 1000 })
    descricao: string;

    @ManyToMany(() => Treino, treinos => treinos.exercicios, {
        onDelete: "SET NULL",
        onUpdate: 'CASCADE',
    })
    treinos: Treino[];

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

    public getId(): string {
        return this.id
    }
}
