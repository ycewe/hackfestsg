// Dependencies

var koa = require('koa');
app = koa();
var router = require('koa-router')();
var entry = require('../model/entrySchema');
var bodyParser = require('koa-bodyparser')();
app.use(bodyParser);

/**
 * GET. Returns the whole database
 */
router.get('/api', function *(req, res, next){

    res = yield entry.find(req.query, function(err,api){
    }).exec();
    this.body = res;

});


/**
 * POST. Creates an entry.
 */
router.post('/api', bodyParser, function *(next){
    entry.create(this.request.body, function(err){
    if (err) console.log(err);
   })
});

/**
 * Retrieves a single entry by ID.
 */
router.get('/api/:id', function *(req, res, next){

    res = yield entry.findById(this.params.id, function(err,post){
        if (err) return next(err);
    }).exec();
    this.body = res;

});

// PUT. Update.
router.put('/api/:id', bodyParser, function *(req, res, next) {

    yield entry.findByIdAndUpdate(this.params.id, this.request.body)

});

// GET array of top 5 trending
router.get('/trending', function *(req, res, next){
   res = yield entry.find().sort({trendingScore: -1}).limit(5).exec();
    this.body = res;
});

// DELETE a particular id
router.delete('/api/:id', function *(req, res, next) {

    res = yield entry.findByIdAndRemove(this.params.id, function (err, post) {
        if (err) return next(err);
    });
});

module.exports = router;

