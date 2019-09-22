 'use strict'

const Schema = use('Schema')

class BobotSubkriteriaSchema extends Schema
{
    up()
    {
        this.create('bobot_subkriteria', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.float('bobot').notNullable().defaultTo('0')
            table.float('bobot_global').notNullable().defaultTo('0')
            table.integer('subkriteria_id').unsigned().notNullable()
            table.integer('user_id').unsigned().notNullable()

            table.index(["user_id"], 'fk_bobot_subkriteria_users2_idx')

            table.index(["subkriteria_id"], 'fk_bobot_subkriteria_subkriteria2_idx')
            table.timestamps()


            table.foreign('subkriteria_id', 'fk_bobot_subkriteria_subkriteria2_idx')
                .references('id').on('subkriteria')
                .onDelete('no action')
                .onUpdate('no action')

            table.foreign('user_id', 'fk_bobot_subkriteria_users2_idx')
                .references('id').on('users')
                .onDelete('no action')
                .onUpdate('no action')
        })
    }

    
     down()
     {
       this.drop('bobot_subkriteria')
     }
}

module.exports = BobotSubkriteriaSchema
