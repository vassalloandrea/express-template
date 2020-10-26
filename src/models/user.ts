import { ObjectType, Field } from 'type-graphql'
import { Entity, Column } from 'typeorm'

import { AppBaseEntity } from './base'

@Entity()
@ObjectType()
export class User extends AppBaseEntity {
  @Field(() => String)
  @Column()
  name: string

  @Field(() => String)
  @Column()
  email: string
}
