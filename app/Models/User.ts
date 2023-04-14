import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Company from './Company'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public isEnable: boolean

  @column()
  public companyId: number

  @belongsTo(() => Company)
  public company: BelongsTo<typeof Company>
}
