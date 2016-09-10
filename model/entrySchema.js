// Dependencies
var mongoose = require('mongoose');

var entrySchema = new mongoose.Schema({
    image: String,
    entryName : String,
    userName : String,
    dateOfPost : String,
    rating : Number,
    numViews : Number,
    numDownloads : Number,
    materials : [String],
    steps : [{stepImage : String, stepText : String}],
    hashTag : String,
    trendingScore : Number

});

var entryModel = mongoose.model('Entry', entrySchema);

/*
var test = new entryModel({image : 'haha', entryName : 'haha', userName :'haha',
            dateOfPost : 'haha', rating : 1, numViews : '5', numDownloads : '5',
                materials : ['test'], steps : [{stepImage : 'haha', stepText : 'haha'}],
                    hashTag : 'haha', trendingScore : 5});
test.save(function(err){
    if (err){
        console.log("Failed");
    }
    else {
        console.log("passed");
    }
});
*/

// Return Model
module.export = entryModel;