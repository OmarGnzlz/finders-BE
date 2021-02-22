import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Health } from '../../health/entities/health.entity';

@Entity('blood_type')
export class BloodType {
  @OneToMany(() => Health, (health) => health.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  type_blood: string;
}
