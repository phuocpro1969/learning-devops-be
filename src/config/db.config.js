require('dotenv').config();

module.exports = {
  HOST: process.env.HOST, 
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: "mysql",
  pool: {
    max: process.env.MAX_POOL,
    min: process.env.MIN_POOL,
    acquire: process.env.ACQUIRE_POOL,
    idle: process.env.IDLE_POOL
  }
};
