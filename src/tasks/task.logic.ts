import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { Task } from "../types";
import { create, read, readOne, update, remove } from "./task.api";

async function index(req: Request, res: Response) {
  try {
    const task: Task[] = await read();
    return res.status(200).json(task);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
}

async function show(req: Request, res: Response) {
  try {
    const task = await readOne(req.params.id);
    if (task) {
      return res.status(200).json(task);
    }
    return res.status(404).json("Task could not found");
  } catch (error: any) {
    return res
      .status(500)
      .json("something wrong, may be task not found with this id");
  }
}

async function store(req: Request, res: Response) {
  body("title").isString().isEmpty;
  body("completed").isBoolean().isEmpty;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const task: Task = req.body;
    const newTask = await create(task);

    return res.status(201).json({
      message: "task created successfully",
      newTask,
    });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
}

async function updateTask(req: Request, res: Response) {
  body("title").isString().isEmpty;
  body("completed").isBoolean().isEmpty;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const task: Task = req.body;
    const updatedTask = await update(req.params.id, task);
    if (updatedTask) {
      return res.status(200).json({
        message: "task updated successfully",
        updatedTask,
      });
    }
    return res.status(404).json("Task could not found");
  } catch (error: any) {
    return res

      .status(500)
      .json("something wrong, may be task not found with this id");
  }
}

async function deleteTask(req: Request, res: Response) {
  try {
    const deletedTask = await remove(req.params.id);
    if (deletedTask) {
      return res.status(200).json({
        message: "task deleted successfully",
        deletedTask,
      });
    }
    return res.status(404).json("Task could not found");
  } catch (error: any) {
    return res
      .status(500)
      .json("something wrong, may be task not found with this id");
  }
}

export { index, show, store, updateTask, deleteTask };
