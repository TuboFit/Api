import { Entity, Column, CreateDateColumn, UpdateDateColumn, Generated, PrimaryColumn, BeforeInsert, BeforeUpdate, OneToMany, OneToOne, JoinColumn } from "typeorm";
import bcrypt from "bcrypt"
import { Pessoa } from "src/pessoas/entities/pessoa.entity";

@Entity("usuarios")
export class Usuario {

    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: true, default: "mudar123" })
    password: string;

    @OneToOne(() => Pessoa, {
        eager: true,
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn()
    dados: Pessoa

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword?: any = function () {
        if (this.password) {
            this.password = bcrypt.hashSync(this.password, 10)
        }
    }
}
