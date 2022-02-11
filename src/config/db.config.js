
module.exports = {
  HOST: process.env.HOST, 
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: "mysql",
  pool: {
    max: Integer.parseInt(process.env.MAX_POOL),
    min: Integer.parseInt(process.env.MIN_POOL),
    acquire: Integer.parseInt(process.env.ACQUIRE_POOL),
    idle: Integer.parseInt(process.env.IDLE_POOL)
  }
};
