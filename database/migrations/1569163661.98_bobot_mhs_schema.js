 'use strict'

const Schema = use('Schema')

class BobotMhsSchema extends Schema
{
    up()
    {
        this.create('bobot_mhs', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.float('bobot').notNullable().defaultTo('0')
            table.dateTime('created_at').nullable().defaultTo(null)
            table.dateTime('update_at').nullable().defaultTo(null)
            table.integer('user_id').unsigned().notNullable()
            table.integer('nilai_mhs_id').unsigned().notNullable()

            table.index(["nilai_mhs_id"], 'fk_bobot_mhs_nilai_mhs1_idx')

            table.index(["user_id"], 'fk_bobot_mhs_users1_idx')


            table.foreign('user_id', 'fk_bobot_mhs_users1_idx')
                .references('id').on('users')
                .onDelete('no action')
                .onUpdate('no action')

            table.foreign('nilai_mhs_id', 'fk_bobot_mhs_nilai_mhs1_idx')
                .references('id').on('nilai_mhs')
                .onDelete('no action')
                .onUpdate('no action')
        })
    }

    
     down()
     {
       this.drop('bobot_mhs')
     }
}

module.exports = BobotMhsSchema
