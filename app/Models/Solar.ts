import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Solar extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public total_consumer_unit: String
  @column()
  public total_system_size: String
  @column()
  public total_generation_instant_power: number
  @column()
  public total_generated_energy: String
  @column()
  public total_finantial_generation_energy: String
  @column()
  public total_trees: number
  @column()
  public sustentabilidade_co2_total: number
  @column()
  public energia_gerada_total: String
  @column()
  public banhos: number
  @column()
  public geladeiras: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
