import { Router } from "express";

import { getUrlById } from "../controllers/urls/analytics-url";
import { getAllUrl } from "../controllers/urls/get-url";
import { postUrl } from "../controllers/urls/post-url";

const useRouter = Router();

useRouter.route("/").get(getAllUrl).post(postUrl)

useRouter.route("/:shortId").get(getUrlById);

export { useRouter };