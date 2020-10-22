import { Entity, Column } from 'typeorm'

import { AppBaseEntity } from './base'

@Entity()
export class User extends AppBaseEntity {
  @Column()
  name: string
}
