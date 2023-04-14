import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'companies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments('id')
        .notNullable()
      table.string('company_name', 40).notNullable()
      table.boolean('is_enable')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
