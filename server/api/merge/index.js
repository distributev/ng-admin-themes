'use strict';

import {Router} from 'express';
import * as controller from './merge.controller';

var router = new Router();

router.get('/:code/history',controller.getHistory);
router.post('/', controller.create);

module.exports = router;
