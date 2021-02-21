import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany
} from 'typeorm';
import { Health } from '../../health/entities/health.entity'

@Entity('type_allergies')
export class Allergies {
  @OneToMany(() => Health, health => health.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false})
  type_allergies: string;
}
