import express from "express"
const router = express.Router();
const app = express()
import { getAllProducts,
         createProducts,
         getProductsById,
         updateProducts,
         deleteProducts 
} from "../controllers/products.js" 

router.get("/", getAllProducts)
router.get("/:id", getProductsById)
router.post("/", createProducts)
router.put("/:id", updateProducts)
router.delete("/:id", deleteProducts)

export default router