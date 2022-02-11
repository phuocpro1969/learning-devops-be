
module.exports = {
  HOST: process.env.HOST, 
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: "mysql",
  pool: {
    max: parseInt(process.env.MAX_POOL),
    min: parseInt(process.env.MIN_POOL),
    acquire: parseInt(process.env.ACQUIRE_POOL),
    idle: parseInt(process.env.IDLE_POOL)
  }
};
