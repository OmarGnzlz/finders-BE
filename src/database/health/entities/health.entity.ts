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

  @Column({ type: 'varchar', nullable: false})
  allergies: string;

  @Column({ type: 'varchar', nullable: false})
  diseases: string;

  @Column({ type: 'varchar', nullable: false})
  medication: string;

  @Column({ type: 'varchar', nullable: false})
  blood_type: string;

}
