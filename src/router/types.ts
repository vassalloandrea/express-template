export enum Action {
  LIST = 'list',
  SHOW = 'show',
  CREATE = 'create',
  UPDATE = 'update',
  DESTROY = 'destroy',
}

export interface Route {
  name: string
  middleware?: string
  only?: Array<Action>
  path?: string
}
