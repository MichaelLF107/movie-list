'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments()
      table.string('title', 80).notNullable()
      table.string('link', 254)
      table.string('platform', 80)
      table.boolean('watched').defaultTo(false)
      table.integer('user_id', 254).notNullable()
      table.text('file', 'longtext')
      table.string('file_name', 65535)
      table.timestamps()
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MovieSchema
