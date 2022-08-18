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

  static async getById(id) { // Revise for Later
    const { rows } = await pool.query(
      `
        SELECT * FROM restaurants
        WHERE id = $1
        `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Restaurant(rows[0]);
  }
};

// Sean's getById for Restaurant

// SELECT eatery.*,
// COALESCE (json_agg(to_jsonb(reviews))
//           FILTER (WHERE reviews.id IS NOT NULL), '[]')
//           as review from eatery
//           LEFT JOIN reviews on eatery.id = reviews.eatery_id
//           WHERE eatery.id = $1
//           GROUP BY eatery.id

