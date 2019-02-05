const pg = require('pg');
const client = new pg.Client('postgres://localhost/acme_web_db');

const SEED = `
    DROP TABLE IF EXISTS web;
    CREATE TABLE web(
        id SERIAL PRIMARY KEY,
        name
    )
`;

client.connect()
    .then(() => client.query(SEED))
    .catch (ex => console.log(ex));