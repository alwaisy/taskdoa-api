import { Task } from "../types";
import { db } from "../utils/client";

/**
 * read
 * readOne
 * create
 * update
 * delete is not allowed as delete is a reserved word in javascript/ts so we use remove instead
 *
 */

export const read = async (): Promise<Task[]> => {
  return db.task.findMany({
    select: {
      id: true,
      title: true,
      completed: true,
    },
  });
};

export const readOne = async (id: string): Promise<Task | null> => {
  return db.task.findUnique({
    where: {
      id,
    },
  });
};

export const create = (task: Task): Promise<Task> => {
  const { title, completed } = task;
  return db.task.create({
    data: {
      title,
      completed,
    },
  });
};

export const update = async (id: string, task: Task): Promise<Task | null> => {
  const { title, completed } = task;
  return db.task.update({
    where: {
      id,
    },
    data: {
      title,
      completed,
    },
  });
};

export const remove = async (id: string): Promise<Task | null> => {
  return db.task.delete({
    where: {
      id,
    },
  });
};
