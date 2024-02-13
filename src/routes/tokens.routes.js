import {Router} from "express"
import {getTokens, createToken, updateToken, deleteToken, getToken, getLastTokenPrice, getTokenPriceHistory} from '../controllers/tokens.controller.js'

const router = Router()

router.get("/Tokens", getTokens);
router.post("/Tokens", createToken);
router.put("/Tokens/:id", updateToken);
router.delete("/Tokens/:id", deleteToken);
router.get("/Tokens/:id", getToken);
router.get('/Tokens/:id/lastPrice', getLastTokenPrice);
router.get('/Tokens/:id/priceHistory', getTokenPriceHistory)

export default router;