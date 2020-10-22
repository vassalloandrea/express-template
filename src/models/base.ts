import {
  ObjectID,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm'

export abstract class AppBaseEntity extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string
}
