import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TypeUser } from '../../typeuser/entities/typeuser.entity';
import { Position } from '../../position/entities/position.entity';
import { User } from '../../user/entities/user.entity';

@Entity('guard_user')
export class UserGuard {
  @OneToMany(() => Position, (pos) => pos.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @OneToMany(() => User, (user) => user.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  pictures: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @ManyToOne(() => TypeUser, (typeuser) => typeuser.id)
  @JoinColumn({ name: 'type_user_id' })
  type_user_id: TypeUser;
}
