import { Professor } from "src/professores/entities/professores.entity";
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { CreateUsuarioDto } from "../dto/create-usuario.dto";
import { UpdateUsuarioDto } from "../dto/update-usuario.dto";
import { UserType } from "./Enum/UserType";

@Entity("usuarios")
export class Usuario {

    @PrimaryGeneratedColumn("uuid")
    public readonly id: string;

    @Column({ nullable: false, unique: true })
    public email: string;

    @Column({ nullable: true })
    public password: string;

    @Column({ type: "enum", enum: UserType, default: UserType.ALUNO })
    type: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(user: CreateUsuarioDto | UpdateUsuarioDto) {
        Object.assign(this, user)
    }
}
