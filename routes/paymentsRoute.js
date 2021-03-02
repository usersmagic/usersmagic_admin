
const express = require('express');
const router = express.Router();

const isLoggedIn = require('../middleware/isLoggedIn');
const checkAdminRolePermissions = require('../middleware/checkAdminRolePermissions');

const indexGetController = require('../controllers/payments/index/get');
const approveGetController = require('../controllers/payments/approve/get');

router.get(
  '/',
    isLoggedIn,
    checkAdminRolePermissions,
    indexGetController
);
router.get(
  '/approve',
    isLoggedIn,
    checkAdminRolePermissions,
    approveGetController
);

module.exports = router;
