 'use strict'

const Schema = use('Schema')

class KriteriaSchema extends Schema
{
    up()
    {
        this.create('kriteria', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.string('kode', 45).collate('utf8_unicode_ci').notNullable()
            table.string('nama', 80).collate('utf8_unicode_ci').notNullable()

            table.unique(["kode"], 'kode_UNIQUE')
            table.timestamps()
        })
    }

    
     down()
     {
       this.drop('kriteria')
     }
}

module.exports = KriteriaSchema
