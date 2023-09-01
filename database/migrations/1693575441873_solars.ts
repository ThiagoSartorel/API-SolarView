import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'solars'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('total_consumer_unit')
      table.string('total_system_size')
      table.float('total_generation_instant_power')
      table.string('total_generated_energy')
      table.string('total_finantial_generation_energy')
      table.float('total_trees')
      table.float('sustentabilidade_co2_total')
      table.string('energia_gerada_total')
      table.float('banhos')
      table.float('geladeiras')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
