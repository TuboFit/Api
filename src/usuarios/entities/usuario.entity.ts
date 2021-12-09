import { Entity, Column, CreateDateColumn, UpdateDateColumn, Generated, PrimaryColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import bcrypt from "bcrypt"

@Entity("usuarios")
export class Usuario {

    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: true, default: "mudar123" })
    password: string;

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
