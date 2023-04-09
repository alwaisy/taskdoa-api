import { tasks } from "../src/tasks/task.data";
import { Task } from "../src/types";
import { db } from "../src/utils/client";

async function seed() {
  await Promise.all([
    getTasks().map((task) => {
      const { title, completed } = task;
      return db.task.create({
        data: {
          title,
          completed,
        },
      });
    }),
  ]);
}

seed()
  .then(() => {
    console.log("seeded db");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// seeding db with data from src/tasks/task.data.ts

function getTasks(): Array<Task> {
  // console.log("seeding db with data from src/tasks/task.data.ts");
  return tasks;
}
