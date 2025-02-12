import { RequestHandler } from "express";
import shortid from "shortid";

import { UrlModel } from "../../models/url-model";

export const postUrl: RequestHandler = async (req, res, next) => {
  try {
    const { redirectUrl } = req.body;

    if (!redirectUrl) {
      return res.render("home", {
        data: await UrlModel.find({}),
        error: "URL is required"
      });
    }
    console.log(redirectUrl);

    const existingUrl = await UrlModel.findOne({ redirectUrl });
    if (existingUrl) {
      return res.render("home", {
        data: await UrlModel.find({}),
        error: "URL already exists"
      });
    }

    const shortId = shortid.generate();

    await UrlModel.create({
      shortId,
      redirectUrl,
      visitHistory: [],
    });

    res.redirect("/url");
  } catch (err) {
    next(err);
  }
};
