const mongoose = require("mongoose");

const gkeasySchema = mongoose.Schema({
    
    "category": String,
    "type": String,
    "difficulty": String,
    "question": String,
    "correct_answer": String,
    "incorrect_answers":Array

})

const Gkeasy = mongoose.model("gkeasy",gkeasySchema);

const gkmediumSchema = mongoose.Schema({
    
    "category": String,
    "type": String,
    "difficulty": String,
    "question": String,
    "correct_answer": String,
    "incorrect_answers":Array

})

const Gkmedium = mongoose.model("gkmedium",gkmediumSchema);

const gkhardSchema = mongoose.Schema({
    
    "category": String,
    "type": String,
    "difficulty": String,
    "question": String,
    "correct_answer": String,
    "incorrect_answers":Array

})

const Gkhard = mongoose.model("gkhard",gkhardSchema);







//Sports-------------------------------------------------------------------------------------------------------------------------

const sporteasySchema = mongoose.Schema({
    
    "category": String,
    "type": String,
    "difficulty": String,
    "question": String,
    "correct_answer": String,
    "incorrect_answers":Array

})

const sporteasy = mongoose.model("sporteasy",sporteasySchema);

const sportmediumSchema = mongoose.Schema({
    
    "category": String,
    "type": String,
    "difficulty": String,
    "question": String,
    "correct_answer": String,
    "incorrect_answers":Array

})

const sportmedium = mongoose.model("sportmedium",sportmediumSchema);

const sporthardSchema = mongoose.Schema({
    
    "category": String,
    "type": String,
    "difficulty": String,
    "question": String,
    "correct_answer": String,
    "incorrect_answers":Array

})

const sporthard = mongoose.model("sporthard",sporthardSchema);



//Geography-------------------------------------------------------------------------------------------------------
const geoeasySchema = mongoose.Schema({
    
    "category": String,
    "type": String,
    "difficulty": String,
    "question": String,
    "correct_answer": String,
    "incorrect_answers":Array

})

const geoeasy = mongoose.model("geoeasy",geoeasySchema);

const geomediumSchema = mongoose.Schema({
    
    "category": String,
    "type": String,
    "difficulty": String,
    "question": String,
    "correct_answer": String,
    "incorrect_answers":Array

})

const geomedium = mongoose.model("geomedium",geomediumSchema);

const geohardSchema = mongoose.Schema({
    
    "category": String,
    "type": String,
    "difficulty": String,
    "question": String,
    "correct_answer": String,
    "incorrect_answers":Array

})

const geohard = mongoose.model("geohard",geohardSchema);









module.exports={Gkeasy,Gkmedium,Gkhard,sporteasy,sporthard,sportmedium,geoeasy,geohard,geomedium};