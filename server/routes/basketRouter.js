const Router = require("express")
const router = new Router()
const BasketController = require("../controllers/basketController")
const authMiddleware = require("../middleware/authMiddleware")

router.post('/',authMiddleware, BasketController.push)
router.delete('/', authMiddleware, BasketController.remove)

module.exports = router