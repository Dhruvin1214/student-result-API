var mongoose = require('mongoose');
var studentschema = new mongoose.Schema({
    rno:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    gujrati:{
        type:String,
        required:true
    },
    hindi:{
        type:String,
        required:true
    },
    english:{
        type:String,
        required:true
    },
    total:{
        type:String,
    },
    percentage:{
        type:String,
    }
});

studentschema.pre('save',function(){
    var gujrati = parseInt(this.gujrati);
    var hindi = parseInt(this.hindi);
    var english = parseInt(this.english);
    var total = gujrati+hindi+english;
    var percentage = parseFloat(total/3).toFixed(2);

    this.total = total;
    this.percentage = percentage;
})

module.exports = mongoose.model('student',studentschema);