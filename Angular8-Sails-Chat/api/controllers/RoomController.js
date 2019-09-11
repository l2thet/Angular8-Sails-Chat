module.exports = {
    join: function (req, res) {
        //Message.subscribe(req, 'message');
        sails.sockets.join(req, 'message');
        res.json({
            success: true,
        });
    },
    leave: function (req, res) {
        sails.sockets.leave(req, 'message');
        //Message.unsubscribe(req, 'message');
        res.json({
            success: true,
        });
    },
    submit: async function (req, res) {
        // Get the value of a parameter
        var param = req.param('message');
        let msg = await Message.create({ message: param });
        sails.sockets.broadcast('message',{
            message: param
        });
        // Message.message("message",{
        //     message: param
        // });

        res.json({
            succes: true
        })
    }
};