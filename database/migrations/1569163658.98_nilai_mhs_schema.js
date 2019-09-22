 'use strict'

const Schema = use('Schema')

class NilaiMhsSchema extends Schema
{
    up()
    {
        this.create('nilai_mhs', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.float('nilai').notNullable().defaultTo('0')
            table.integer('mahasiswa_id').unsigned().notNullable()
            table.integer('subkriteria_id').unsigned().notNullable()

            table.index(["subkriteria_id"], 'fk_nilai_mahasiswa_subkriteria1_idx')

            table.index(["mahasiswa_id"], 'fk_nilai_kriteria_mahasiswa1_idx')
            table.timestamps()


            table.foreign('mahasiswa_id', 'fk_nilai_kriteria_mahasiswa1_idx')
                .references('id').on('mahasiswa')
                .onDelete('no action')
                .onUpdate('no action')

            table.foreign('subkriteria_id', 'fk_nilai_mahasiswa_subkriteria1_idx')
                .references('id').on('subkriteria')
                .onDelete('no action')
                .onUpdate('no action')
        })
    }

    
     down()
     {
       this.drop('nilai_mhs')
     }
}

module.exports = NilaiMhsSchema
