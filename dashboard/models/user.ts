export interface User {
    firstName:String,
    lastName:String,
    email: String,
    password: String,
    avatar: {public_id: String,url: String,},
    role: String,
    createdAt:Date,
}