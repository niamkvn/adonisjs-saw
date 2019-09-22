 'use strict'

const Schema = use('Schema')

class TotalBobotSchema extends Schema
{
    up()
    {
        this.create('total_bobot', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.float('total').notNullable().defaultTo('0')
            table.integer('bobot_mhs_id').unsigned().notNullable()
            table.integer('alternatif_id').unsigned().notNullable()
            table.integer('user_id').unsigned().notNullable()

            table.index(["alternatif_id"], 'fk_total_bobot_alternatif1_idx')

            table.index(["user_id"], 'fk_total_bobot_users1_idx')

            table.index(["bobot_mhs_id"], 'fk_total_bobot_bobot_mhs1_idx')
            table.timestamps()


            table.foreign('bobot_mhs_id', 'fk_total_bobot_bobot_mhs1_idx')
                .references('id').on('bobot_mhs')
                .onDelete('no action')
                .onUpdate('no action')

            table.foreign('alternatif_id', 'fk_total_bobot_alternatif1_idx')
                .references('id').on('alternatif')
                .onDelete('no action')
                .onUpdate('no action')

            table.foreign('user_id', 'fk_total_bobot_users1_idx')
                .references('id').on('users')
                .onDelete('no action')
                .onUpdate('no action')
        })
    }

    
     down()
     {
       this.drop('total_bobot')
     }
}

module.exports = TotalBobotSchema
