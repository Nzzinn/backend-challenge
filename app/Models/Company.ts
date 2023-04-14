import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public companyName: string

  @column()
  public isEnable: boolean

  @hasMany(() => User)
  public user: HasMany<typeof User>
}
