import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve(__dirname, "../.env");

dotenv.config({
  path: envPath,
});

export const PORT = process.env.PORT;
export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;
