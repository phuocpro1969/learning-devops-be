
module.exports = {
  HOST: process.env.HOST, 
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: "mysql",
  pool: {
    max: process.env.MAX_POOL||5,
    min: process.env.MIN_POOL||0,
    acquire: process.env.ACQUIRE_POOL||30000,
    idle: process.env.IDLE_POOL||10000
  }
};
