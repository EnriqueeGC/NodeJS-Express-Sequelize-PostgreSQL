
module.exports = (sequelize, Sequelize) => {    
    const Order = sequelize.define('order', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        order_date: {
            type: Sequelize.DATE
        },
        total_amount: {
            type: Sequelize.DOUBLE
        },
        copyrightby: {
            type: Sequelize.STRING,
            defaultValue: 'UMG Antigua'
        }
    });
    return Order;
};