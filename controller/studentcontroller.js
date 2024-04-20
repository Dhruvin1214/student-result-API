var studentmodel = require('../model/studentmodel');

exports.add_result = async (req, res) => {
    var data = await studentmodel.create(req.body);
    res.status(200).json({
        data
    });
};

exports.delete_result = async (req, res) => {
    var id = req.params.id;
    var data = await studentmodel.findByIdAndDelete(id);
    res.status(200).json({
        status: 'deleted'
    })
}

exports.update_result = async (req, res) => {
    var id = req.params.id;
    var data = await studentmodel.findByIdAndUpdate(id,req.body);
    
    var gujrati = parseInt(req.body.gujrati);
    var hindi = parseInt(req.body.hindi);
    var english = parseInt(req.body.english);

    var tmp1 = gujrati + hindi + english;
    var tmp2 = tmp1 / 3;

    var data = await studentmodel.findByIdAndUpdate(id, {
        $set: {
            total: tmp1,
            percentage: tmp2.toFixed(2)
        }
    });
    res.status(200).json({
        status: "updated"
    });
}

exports.view_result = async (req, res) => {
    var data = await studentmodel.find();
    res.status(200).json({
        data
    })
}