import express from "express"
const router = express.Router();
const app = express()
import {  getAllMerchant,
          createMerchant,
          deleteMerchant,
          authMerchant 
} from "../controllers/merchants.js" 

router.get("/", getAllMerchant)
router.post("/", createMerchant)
router.delete("/:id", deleteMerchant)
router.post("/login", authMerchant)

export default router