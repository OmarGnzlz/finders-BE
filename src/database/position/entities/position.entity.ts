import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { UserGuard } from '../../userguard/entities/userguard.entity';
import { CodeQr } from '../../codeqr/entities/codeqr.entity';

@Entity('position')
export class Position {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  gps: string;

  @Column({ type: 'text', nullable: false })
  map_codes: string;

  @ManyToOne(() => UserGuard, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: UserGuard;

  @ManyToOne(() => UserGuard, (userguard) => userguard.id)
  @JoinColumn({ name: 'guard_id' })
  guard_id: UserGuard;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'angel_id' })
  angel_id: User;

  @ManyToOne(() => CodeQr, (codeqr) => codeqr.id)
  @JoinColumn({ name: 'code_qr_id' })
  code_qr_id: CodeQr;
}
