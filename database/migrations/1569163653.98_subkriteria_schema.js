 'use strict'

const Schema = use('Schema')

class SubkriteriaSchema extends Schema
{
    up()
    {
        this.create('subkriteria', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.string('kode', 45).collate('utf8_unicode_ci').notNullable()
            table.string('nama', 80).collate('utf8_unicode_ci').notNullable()
            table.enum('atribut', ["BENEFIT", "COST"]).collate('utf8_unicode_ci').notNullable()
            table.integer('kriteria_id').unsigned().notNullable()

            table.index(["kriteria_id"], 'fk_sub_kriteria_kriteria1_idx')

            table.unique(["kode"], 'kode_UNIQUE')
            table.timestamps()


            table.foreign('kriteria_id', 'fk_sub_kriteria_kriteria1_idx')
                .references('id').on('kriteria')
                .onDelete('no action')
                .onUpdate('no action')
        })
    }

    
     down()
     {
       this.drop('subkriteria')
     }
}

module.exports = SubkriteriaSchema
