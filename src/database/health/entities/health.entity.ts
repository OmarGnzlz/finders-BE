import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne , OneToMany} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Allergies } from '../../allergies/entities/allergies.entity';
import { Medication } from '../../medication/entities/medication.entity';
import { BloodType } from '../../bloodtype/entities/bloodtype.entity';
import { Disease } from '../../disease/entities/disease.entity';

@Entity('health')
export class Health {
  
  @OneToMany(() => User, (user) => user.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })

  @JoinColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  allergies: string;
  
  @Column({ type: 'varchar', nullable: false })
  diseases: string;
  
  @Column({ type: 'varchar', nullable: false })
  medication: string;
  
  @Column({ type: 'varchar', nullable: false })
  blood_type: string;
  

  /* @ManyToOne(() => Allergies, (allergies) => allergies.id)
  @JoinColumn({ name: 'allergies' })
  allergies: Allergies;

  @ManyToOne(() => Disease, (disease) => disease.id)
  @JoinColumn({ name: 'diseases' })
  diseases: Disease;

  @ManyToOne(() => Medication, (medication) => medication.id)
  @JoinColumn({ name: 'medication' })
  medication: Medication;

  @ManyToOne(() => BloodType, (blood) => blood.id)
  @JoinColumn({ name: 'blood_type' })
  blood_type: BloodType;

 */

// @ManyToOne(() => User, (user) => user.id)
// @JoinColumn({ name: 'user_id' })
// user_id: User;

}