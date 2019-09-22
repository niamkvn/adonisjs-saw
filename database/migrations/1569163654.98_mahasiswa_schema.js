 'use strict'

const Schema = use('Schema')

class MahasiswaSchema extends Schema
{
    up()
    {
        this.create('mahasiswa', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.string('nim', 8).collate('utf8_unicode_ci').notNullable()
            table.string('nama', 80).collate('utf8_unicode_ci').notNullable()
            table.integer('user_id').unsigned().notNullable()

            table.index(["user_id"], 'fk_mahasiswa_users1_idx')

            table.unique(["nim"], 'nim_UNIQUE')
            table.timestamps()


            table.foreign('user_id', 'fk_mahasiswa_users1_idx')
                .references('id').on('users')
                .onDelete('no action')
                .onUpdate('no action')
        })
    }

    
     down()
     {
       this.drop('mahasiswa')
     }
}

module.exports = MahasiswaSchema
