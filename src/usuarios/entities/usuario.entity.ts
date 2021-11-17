import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Generated, PrimaryColumn } from "typeorm";
import { v4 as uuidv4, } from 'uuid';

@Entity("usuarios")
export class Usuario {

    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: true })
    password: string;

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
}
