import {
  Column, 
  Entity, 
  PrimaryGeneratedColumn, 
  JoinColumn,
  OneToMany 
} from 'typeorm';
import { User } from '../../user/entities/user.entity'

@Entity('institutions')
export class Institutions {
  @OneToMany(() => User, user => user.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false})
  institutions: string;
}
