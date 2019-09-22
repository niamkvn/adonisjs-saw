 'use strict'

const Schema = use('Schema')

class BandingSubkriteriaSchema extends Schema
{
    up()
    {
        this.create('banding_subkriteria', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.float('nilai').notNullable().defaultTo('0')
            table.integer('user_id').unsigned().notNullable()
            table.string('sk_banding', 45).collate('utf8_unicode_ci').notNullable()
            table.string('sk_pembanding', 45).collate('utf8_unicode_ci').notNullable()

            table.index(["sk_banding"], 'fk_banding_subkriteria_subkriteria1_sk_banding')

            table.index(["user_id"], 'fk_banding_subkriteria_users1_idx')

            table.index(["sk_pembanding"], 'fk_banding_subkriteria_subkriteria2_sk_pembanding')
            table.timestamps()


            table.foreign('user_id', 'fk_banding_subkriteria_users1_idx')
                .references('id').on('users')
                .onDelete('no action')
                .onUpdate('no action')

            table.foreign('sk_banding', 'fk_banding_subkriteria_subkriteria1_sk_banding')
                .references('kode').on('subkriteria')
                .onDelete('no action')
                .onUpdate('no action')

            table.foreign('sk_pembanding', 'fk_banding_subkriteria_subkriteria2_sk_pembanding')
                .references('kode').on('subkriteria')
                .onDelete('no action')
                .onUpdate('no action')
        })
    }

    
     down()
     {
       this.drop('banding_subkriteria')
     }
}

module.exports = BandingSubkriteriaSchema
