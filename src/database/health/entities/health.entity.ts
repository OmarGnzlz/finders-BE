import {
  Column, 
  Entity, 
  PrimaryGeneratedColumn, 
  JoinColumn,
  OneToMany 
} from 'typeorm';
import { User } from '../../user/entities/user.entity'

@Entity('health')
export class Health {
  @OneToMany(() => User, user => user.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'string', nullable: false})
  allergies: string;

  @Column({ type: 'string', nullable: false})
  diseases: string;

  @Column({ type: 'string', nullable: false})
  medication: string;

  @Column({ type: 'string', nullable: false})
  blood_type: string;

}
