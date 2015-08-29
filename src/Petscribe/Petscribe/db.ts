
var knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'dbuser',
        password: 'dbpassword',
        database: 'petscribe_test',
        charset: 'utf8'
    }
});

var bookshelf = require('bookshelf')(knex);

export = bookshelf;