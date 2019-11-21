import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({
    length: 20
  })
  username: string;

  @Column({
    length: 50
  })
  displayName: string;

  @Column({
    length: 10
  })
  key: string;
}