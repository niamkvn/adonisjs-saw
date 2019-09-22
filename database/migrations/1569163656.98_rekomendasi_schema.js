 'use strict'

const Schema = use('Schema')

class RekomendasiSchema extends Schema
{
    up()
    {
        this.create('rekomendasi', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.integer('skor').notNullable()
            table.integer('alternatif_id').unsigned().notNullable()
            table.integer('mahasiswa_id').unsigned().notNullable()

            table.index(["alternatif_id"], 'fk_rekomendasi_alternatif1_idx')

            table.index(["mahasiswa_id"], 'fk_rekomendasi_mahasiswa1_idx')
            table.timestamps()


            table.foreign('alternatif_id', 'fk_rekomendasi_alternatif1_idx')
                .references('id').on('alternatif')
                .onDelete('no action')
                .onUpdate('no action')

            table.foreign('mahasiswa_id', 'fk_rekomendasi_mahasiswa1_idx')
                .references('id').on('mahasiswa')
                .onDelete('no action')
                .onUpdate('no action')
        })
    }

    
     down()
     {
       this.drop('rekomendasi')
     }
}

module.exports = RekomendasiSchema
