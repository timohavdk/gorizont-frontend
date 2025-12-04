import 'reflect-metadata';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Files {
    @PrimaryGeneratedColumn('uuid')
        id: string;

    @Column('text')
        name: string;

    @Column('text')
        bucket: string;

    @CreateDateColumn()
        created_at: Date;

    @UpdateDateColumn()
        updated_at: Date;

    @DeleteDateColumn()
        deletedDate: Date;
}
