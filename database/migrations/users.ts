import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 40).notNullable()
      table.boolean('is_enable')
      table
        .integer('company_id')
        .references('id')
        .inTable('companies')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
