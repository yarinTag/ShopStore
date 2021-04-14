import {User} from '../models/user'
export interface Product {
    price:Number,
    ratings: Number,
    stock: Number,
    numOfReviews: Number,
    _id:String,
    name:String,
    description: String,
    images: [{_id:Number,public_id:String,url:String }]
    category: String
    seller: String,
    reviews: [ {name:String, rating: String,comment: String} ],
    createdAt: Date
    user: User,
}

