import { Dados } from "src/dados/entities/dado.entity";
import { Treino } from "src/treinos/entities/treino.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CreateAlunoDto } from "../dto/create-aluno.dto";
import { UpdateAlunoDto } from "../dto/update-aluno.dto";
import { AlunoGenero } from "./Enum/gereno.enum";

@Entity("alunos")
export class Aluno {
    @PrimaryGeneratedColumn("uuid")
    public readonly id: string;

    @Column({ nullable: false })
    public peso: number;

    @Column({ nullable: false })
    public altura: number;

    @Column({ nullable: false })
    public idade: number;

    @Column({ type: "float", })
    public imc: number;

    @Column({ type: "float", })
    public tmb: number;

    @Column({ type: "enum", enum: AlunoGenero, default: AlunoGenero.M })
    public genero: number;

    @Column()
    public obs: string;

    @OneToOne(type => Dados, aluno => Aluno, {
        eager: true,
        cascade: ['insert', 'remove', 'soft-remove', 'update']
    })
    @JoinColumn()
    dados: Dados;

    @OneToOne(type => Usuario, aluno => Aluno, {
        eager: true,
        cascade: ['insert', 'remove', 'soft-remove', 'update']
    })
    @JoinColumn()
    usuario: Usuario;

    @ManyToMany(type => Treino, {
        eager: true,
        cascade: ['insert', 'update']
    })
    @JoinTable()
    treinos: Treino[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(aluno: CreateAlunoDto | UpdateAlunoDto) {
        Object.assign(this, aluno)
    }

}