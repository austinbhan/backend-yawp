const pool = require('../utils/pool');

module.exports = class Restaurant {
  id;
  name;
  description;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.description = row.description;
    this.details = row.details;
    this.stars = row.stars;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM restaurants');
    return rows.map((row) => new Restaurant(row));
  }

  static async getById(id) { // Revise for Later
    
    const { rows } = await pool.query(
      `
      SELECT restaurants.name, restaurants.description, restaurant_reviews.stars, restaurant_reviews.details
      FROM restaurants
      
      LEFT JOIN restaurant_reviews
      on restaurant_reviews.restaurant_id = restaurants.id
      
      WHERE restaurants.id = $1
        `,
      [id]
    );
    console.log({ rows });
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

