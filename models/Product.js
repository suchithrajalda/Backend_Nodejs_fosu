const { default: mongoose } = require('mongoose');
const moongoose=require('mongoose');

const ProductSchema=new moongoose.Schema({
    productName:{
        type:String,
        required:true

    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:[{
            type:String,
            enum:['veg','non-veg']
        }]
    },
    image:{
        type:String
    },
    bestSeller:{
        type:String
    },
    description:{
          type:String
    },
    firm:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Firm'
    }]
});


const Product=moongoose.model('Product',ProductSchema);

module.exports=Product