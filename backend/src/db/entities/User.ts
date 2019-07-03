import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
    })
    login: string;

    @Column({
        length: 100
    })
    name: string;

    @Column({
        length: 1000
    })
    description: string;
}