'use strict';
import * as logger from '../../sharedLibs/services/logger';
import * as cache from '../services/cache';
import { TEventCb } from '../../sharedLibs/types/events';
import {
  ICacheDeleteKeysPayload
} from '../../sharedLibs/interfaces/cacheEvents';

export default function handler(
  payload: ICacheDeleteKeysPayload,
  ack?: TEventCb
): void {
  logger.debug({ message: 'Received event "cacheDeleteKeys"' });

  cache.delKeys(payload.keys)
  .then(numKeysDeleted => {
    if (ack) { ack(null, numKeysDeleted); }
  })
  .catch(error => {
    logger.error({
      message: error.message,
      payload: error,
    });
    if (ack) { ack(error); }
  });
}