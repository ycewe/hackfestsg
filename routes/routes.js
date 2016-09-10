// Dependencies

var koa = require('koa');
app = koa();
var router = require('koa-router')();
var entry = require('../model/entrySchema');

/**
 * GET the whole database
 */
router.get('/', function* (){
    this.body = 'test';
});


module.exports = router;

