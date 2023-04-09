import { Router } from "express";

import { index, show, store, updateTask, deleteTask } from "./task.logic";

const router = Router();

router.route("/").get(index);
router.route("/:id").get(show);
router.route("/new").post(store);
router.route("/:id/edit").put(updateTask);
router.route("/:id/delete").delete(deleteTask);

export { router };
