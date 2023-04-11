import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router as taskRouter } from "./tasks/task.router";
import { PrismaClient } from "@prisma/client";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();
const prisma = new PrismaClient();

async function main() {
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(express.json());
  app.use("/api/tasks", taskRouter);

  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });

  // Connect the client
  await prisma.$connect();
  console.log("db connected");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
