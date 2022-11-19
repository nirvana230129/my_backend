import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User{

    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column({type: "text", unique: true, nullable: false})
    email: string;

    @Column({type: "text", nullable: false})
    password: string;

    @Column({type: "bool", default: false})
    isAdmin: boolean;

    @Column({type: 'text', default: ''})
    filename: string;

    @Column({type: 'bytea', default: ''})
    data: Uint8Array;
}