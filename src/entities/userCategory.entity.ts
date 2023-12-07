import { IUserCategory } from '@/interfaces/userCategory.interface';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty, isNotEmpty } from 'class-validator';

@Entity()
export class UserCategoryEntity extends BaseEntity implements IUserCategory {
  @PrimaryGeneratedColumn()
  category_id: number;

  @IsNotEmpty()
  @Column()
  category_name: string;
}
