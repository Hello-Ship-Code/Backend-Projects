/* eslint-disable no-unreachable */
import { type RequestHandler } from 'express'

import { UrlModel } from '../../models/url-model'

import HttpError from '../../utils/HttpError'

export type AnalyticsHandler = RequestHandler<{
  shortId: string
}>

export const getUrlById: AnalyticsHandler = async (req, res, next) => {
  try {
    const shortId = req.params.shortId
    if (!shortId) {
      throw new HttpError('url not found', 404)
      return
    }
    const result = await UrlModel.findOneAndUpdate(
      {
        shortId
      },
      {
        $push: {
          visitHistory: [{ timestamp: Date.now() }]
        }
      }
    )

    if (!result) {
      throw new HttpError(`url doesn't exist`, 404)
      return
    }
    res.redirect(result.redirectUrl)
  } catch (error) {
    next(error)
  }
}
