import { Dados } from "src/dados/entities/dado.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CreateAlunoDto } from "../dto/create-aluno.dto";
import { UpdateAlunoDto } from "../dto/update-aluno.dto";
import { AlunoGenero } from "./gereno.enum";

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
        cascade: true,
    })
    @JoinColumn()
    dados: Dados;

    @OneToOne(type => Usuario, aluno => Aluno, {
        eager: true,
        cascade: true,
    })
    @JoinColumn()
    usuario: Usuario;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(aluno: CreateAlunoDto | UpdateAlunoDto) {
        Object.assign(this, aluno)
    }

}