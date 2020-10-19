import { Entity, Column } from 'typeorm'

import { BaseEntity } from './base'

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string
}
