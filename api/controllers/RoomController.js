module.exports = {
    join: function (req, res) {
        Message.subscribe(req, 'message');

        res.json({
            success: true,
        });
    },
    leave: function (req, res) {
        Message.unsubscribe(req, 'message');

        res.json({
            success: true,
        });
    },
    submit: function (req, res) {
        // Get the value of a parameter
        var param = req.param('message');
        Message.message("message",{
            message: param
        });

        res.json({
            succes: true
        })
    }
};