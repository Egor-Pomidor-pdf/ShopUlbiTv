const ApiError = require("../error/ApiError");
const {Basket, Device, BasketDevice} = require("../models/models")

class BasketController {
    async push(req, res, next) {
        try {
            const {deviceId} = req.body
            const userId = req.user.id

            const userBasket = await Basket.findOne({where: {userId}});

            if(!userBasket) {
                return res.status(404).json({message: "Корзина не найдена"})
            }

            const device = await Device.findOne({where: {id: deviceId}})

            if(!device) {
                return res.status(404).json({message: "Устройство не найдено"})
            }

            const existingDevice = await BasketDevice.findOne({
                where: {basketId: userBasket.id, deviceId}
            })

            if(existingDevice) {
                return res.status(400).json({message: "Товар уже в корзине"})
            }

            const basketDevice = await BasketDevice.create({
                basketId: userBasket.id,
                deviceId
            })

            return res.json(basketDevice)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async remove(req, res, next) {
        try {
            const {deviceId} = req.body
            const userId = req.user.id

            const userBasket = await Basket.findOne({where: {
                userId
            }})

            if (!userBasket) {
                return res.status(400).json({message: "Корзина не найдена"})
            }

            const deletedCount = await BasketDevice.destroy({
                where: {
                    basketId: userBasket.id,
                    deviceId
                }
            })

            if(deletedCount === 0) {
                return next(ApiError.badRequest("Товар не найден в корзине"))
            }

            return res.json({success: true})
        } catch(e) {
            return next(ApiError.badRequest(e.message))
        }
        
    }
}

module.exports = new BasketController()