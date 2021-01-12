const router = require('express').Router();

const routes_user = require('./search/routes')

router.use('/user', routes_user)

module.exports = router;