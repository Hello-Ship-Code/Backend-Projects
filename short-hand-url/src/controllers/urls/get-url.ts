import { type Request, type Response, type NextFunction } from "express";

import { UrlModel } from "../../models/url-model";

// import HttpError from "../../utils/HttpError";
export const getAllUrl = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    const data = await UrlModel.find({});
    res.render("home", { data, error: null }); // ✅ Pass null when there's no error
  } catch (err) {
    next(err);
  }

};
