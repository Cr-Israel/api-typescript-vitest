import mongoose from "mongoose";

import { DB_USER, DB_PASS } from "../config";

async function main() {
  await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@getapet.heypw38.mongodb.net/`
  );
  console.log("Conectado ao Mongoose!");
}

main().catch((error) =>
  console.error("Deu erro na conexão com o banco meu querido: " + error)
);

export default mongoose;
