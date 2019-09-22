 'use strict'

const Schema = use('Schema')

class TokensSchema extends Schema
{
    up()
    {
        this.create('tokens', (table) => {
        
            table.engine ('InnoDB')
            table.increments('id').notNullable()
            table.integer('user_id').unsigned().nullable().defaultTo(null)
            table.string('token').collate('utf8_unicode_ci').notNullable()
            table.string('type', 80).collate('utf8_unicode_ci').notNullable()
            table.integer('is_revoked').nullable().defaultTo('0')

            table.index(["user_id"], 'tokens_user_id_foreign')

            table.index(["token"], 'tokens_token_index')

            table.unique(["token"], 'tokens_token_unique')
            table.timestamps()


            table.foreign('user_id', 'tokens_user_id_foreign')
                .references('id').on('users')
                .onDelete('restrict')
                .onUpdate('restrict')
        })
    }

    
     down()
     {
       this.drop('tokens')
     }
}

module.exports = TokensSchema
