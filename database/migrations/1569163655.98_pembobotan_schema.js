 'use strict'

const Schema = use('Schema')

class PembobotanSchema extends Schema
{
    up()
    {
        this.create('pembobotan', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.float('bobot').nullable().defaultTo('0')
            table.integer('mahasiswa_id').unsigned().notNullable()
            table.integer('alternatif_id').unsigned().notNullable()

            table.index(["alternatif_id"], 'fk_hasil_pembobotan_alternatif1_idx')

            table.index(["mahasiswa_id"], 'fk_hasil_pembobotan_mahasiswa1_idx')
            table.timestamps()


            table.foreign('mahasiswa_id', 'fk_hasil_pembobotan_mahasiswa1_idx')
                .references('id').on('mahasiswa')
                .onDelete('no action')
                .onUpdate('no action')

            table.foreign('alternatif_id', 'fk_hasil_pembobotan_alternatif1_idx')
                .references('id').on('alternatif')
                .onDelete('no action')
                .onUpdate('no action')
        })
    }

    
     down()
     {
       this.drop('pembobotan')
     }
}

module.exports = PembobotanSchema
