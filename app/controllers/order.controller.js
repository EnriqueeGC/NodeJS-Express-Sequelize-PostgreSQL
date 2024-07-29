const db = require('../config/db.config.js');
const Order = db.Order;

// /api/orders/create
exports.creates = (req, res) => { 
    let order = {};

    try{
        order.order_date = req.body.order_date;
        order.total_amount = req.body.total_amount;
        
        Order.create(order).then(result => {
            res.status(200).json({
                mesaage: "Upload Successfully a Order with id = " + result.id,
                order: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: 'Fail!',
            error: error.message
        });
    };
}; 

// /api/orders/all
exports.retrieveAllOrders = (req, res) => {
    // Find all Orders
    Order.findAll()
    .then(ordersInfo => {
        res.status(200).json({
            message: "Get all Orders' Infos Successfully!",
            orders: ordersInfo
        });
    })
    . catch(error => {
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
};

// /api/orders/onebyid/:id
exports.getOrderById = (req, res) => {
    let orderId = req.params.id;

    Order.findByPk(orderId)
        .then(order => {
            res.status(200).json({
                message: "Successfully Get a Order with id = " + orderId,
                orders: order
            });
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// /api/orders/update/:id
exports.updateOrderById = async (req, res) => {
    try{
        let orderId = req.params.id;
        let order = await Order.findByPk(orderId);

        if(!order){
            res.status(404).json({
                message: "Not Found for updating a Order with id = " + orderId,
                order: '',
                error: "404"
            });
        } else {
            let updatedObject = {
                order_date: req.body.order_date,
                total_amount: req.body.total_amount
            }
            let result = await Order.update(updatedObject, {returning: true, where: {id: orderId}});

            // return the response to client
            if(!result){
                res.status(500).json({
                    message: "Error -> Can not update a Order with id = " + req.params.id,
                });
            }
            res.status(200).json({
                message: "Update successfully a Order with id = " + orderId,
                order: updatedObject
            });
        }
    } catch(error){
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}

// /api/orders/delete/:id
exports.deleteOrderById = async (req, res) => {
    try {
        let orderId = req.params.id;
        let order = await Order.findByPk(orderId);  
        (orderId);

        if(!order){
            res.status(404).json({
                message: "Does Not exist a Order with id = " + orderId,
                error: "404"
            });
        } else {
            await order.destroy();
            res.status(200).json({
                message: "Delete Successfully a Order with id = " + orderId,
                order: order
            });
        }

    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error!",
            error: error
        });
        
    }
}