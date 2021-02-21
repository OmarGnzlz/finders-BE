import {
  Column, 
  Entity, 
  PrimaryGeneratedColumn, 
  JoinColumn,
  OneToMany 
} from 'typeorm';
import { User } from '../../user/entities/user.entity'

@Entity('health')
export class Institutions {
  @OneToMany(() => User, user => user.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'string', nullable: false})
  institutions: string;
}
