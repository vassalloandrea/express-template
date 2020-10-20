import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql'

import {
  ObjectID,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm'

@ObjectType()
export abstract class AppBaseEntity extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  _id: ObjectID

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn()
  createdAt: string

  @Field(() => GraphQLISODateTime)
  @UpdateDateColumn()
  updatedAt: string
}
