 'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema
{
    up()
    {
        this.create('users', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.string('username', 80).collate('utf8_unicode_ci').notNullable()
            table.string('email', 254).collate('utf8_unicode_ci').notNullable()
            table.string('password', 60).collate('utf8_unicode_ci').notNullable()
            table.enum('hak', ['MAHASISWA', 'KAPRODI', 'PEMBIMBING', 'KOORDINATOR']).collate('utf8_unicode_ci').notNullable().defaultTo('MAHASISWA')

            table.unique(["username"], 'users_username_unique')

            table.unique(["email"], 'users_email_unique')
            table.timestamps()
        })
    }

    
     down()
     {
       this.drop('users')
     }
}

module.exports = UsersSchema
