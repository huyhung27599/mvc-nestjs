import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Report } from 'src/reports/report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @Column({ default: false })
  admin: boolean;

  @AfterInsert()
  logInsert() {
    console.log('Inserting user with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removing user with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updating user with id', this.id);
  }
}
