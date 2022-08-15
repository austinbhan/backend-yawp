const pool = require('../utils/pool');

module.exports = class User {
  email;
  #passwordHash;

  constructor(row) {
    this.id = row.id;
    this.email = row.email;
    this.#passwordHash = row.password_hash;
  }

  static async insert({ email, passwordHash }) {
    console.log('User Model');
    const { rows } = await pool.query(
      `
            INSERT INTO users (email, password_hash)
            VALUES ($1, $2)
            RETURNING *
            `,
      [email, passwordHash]
    );

    return new User(rows[0]);
  }

  get PasswordHash() {
    return this.#passwordHash;
  }

};



