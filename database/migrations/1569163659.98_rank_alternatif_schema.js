 'use strict'

const Schema = use('Schema')

class RankAlternatifSchema extends Schema
{
    up()
    {
        this.create('rank_alternatif', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.integer('rank').notNullable()
            table.integer('alternatif_id').unsigned().notNullable()
            table.integer('mahasiswa_id').unsigned().notNullable()
            table.integer('user_id').unsigned().notNullable()

            table.index(["user_id"], 'fk_rank_alternatif_users1_idx')

            table.index(["alternatif_id"], 'fk_rank_alternatif_alternatif1_idx')

            table.index(["mahasiswa_id"], 'fk_rank_alternatif_mahasiswa1_idx')
            table.timestamps()


            table.foreign('alternatif_id', 'fk_rank_alternatif_alternatif1_idx')
                .references('id').on('alternatif')
                .onDelete('no action')
                .onUpdate('no action')

            table.foreign('mahasiswa_id', 'fk_rank_alternatif_mahasiswa1_idx')
                .references('id').on('mahasiswa')
                .onDelete('no action')
                .onUpdate('no action')

            table.foreign('user_id', 'fk_rank_alternatif_users1_idx')
                .references('id').on('users')
                .onDelete('no action')
                .onUpdate('no action')
        })
    }

    
     down()
     {
       this.drop('rank_alternatif')
     }
}

module.exports = RankAlternatifSchema
