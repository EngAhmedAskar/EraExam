import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import {
  password as passwordAuth,
  master,
  token
} from "../../services/passport";
import { index, create, show, updateOnSubmit, addSnapShot } from "./controller";
import { schema } from "./model";
export exam, { schema } from "./model";

const router = new Router();
const {
  status,
  result,
  spent_time,
  _id,
  email,
  start_time,
  end_time,
  questions
} = schema.tree;

router.get(
  "/",
  // token({ required: true, roles: ['admin'] }),
  query(),
  index
);

router.get("/:token", query(), show);
// router.post('/',
// master(),
// body({ description, is_active }),
// create)

// router.put('/:id',
// // token({ required: true }),
// body({ description, is_active }),
// update)

router.post(
  "/invitation",
  //   master(),
  body({ email }),
  create
);

router.patch("/snap", body(), addSnapShot);

router.patch(
  "/",
  body({
    status,
    result,
    spent_time,
    _id,
    email,
    start_time,
    end_time,
    questions
  }),
  updateOnSubmit
);
export default router;
