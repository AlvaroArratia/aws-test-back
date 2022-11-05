import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(
    __dirname,
    process.env.NODE_ENV ? `${process.env.NODE_ENV}.env` : "development.env"
  ),
});

const config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  LOGGER: process.env.LOGGER || "combined",
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || "asdasdasdasdasdasdasd",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || 5,
  DB_USER: process.env.DB_USER || "ADMIN",
  DB_USER_PASSWORD: process.env.DB_USER_PASSWORD || "Universusalma2022",
  DB_CONNECT_STRING: process.env.DB_CONNECT_STRING || "kodkoddb_high",
};

export default config;
