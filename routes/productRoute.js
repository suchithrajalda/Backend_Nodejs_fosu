const productcontroller=require('../controllers/productController');
const express=require('express')

const router=express.Router();

router.post('/add-product/:firmId',productcontroller.addProduct);
router.get('/:firmId/products',productcontroller.getProductByFirm);

router.get('/uploads/:imageName',(req,res)=>{
    const imageName=req.params.imageName;
    res.header('Content-Type','image/jpeg');
    res.sendFile(Path.join(__dirname,'..','uplaods',imageName))
})

router.delete('/:productId',productcontroller.deleteProductById)

module.exports=router;