const pool = require('../utils/pool');

module.exports = class Restaurant {
  id;
  name;
  description;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.description = row.description;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM restaurants');
    return rows.map((row) => new Restaurant(row));
  }
};
