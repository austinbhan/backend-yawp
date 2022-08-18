const pool = require('../utils/pool');


module.exports = class Review {
  id;
  user_id;
  restaurant_id;
  stars;
  details;

  constructor(row) {
    this.id = row.id;
    this.user_id = row.user_id;
    this.restaurant_id = row.restaurant_id;
    this.stars = row.stars;
    this.details = row.details;
  }

  static async insert({ user_id, restaurant_id, stars, details }) {
    const { rows } = await pool.query(
      `
      INSERT INTO restaurant_reviews (user_id, restaurant_id, stars, details) 
      VALUES ($1, $2, $3, $4)
      RETURNING * ;
      `,
      [user_id, restaurant_id, stars, details]
    ); return new Review(rows[0]);
  } 

};
