// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      database: 'movie_list',
      user: 'postgres',
      password: 'docker',
      port: 5432
    }
  },



};
