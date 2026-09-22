use("studentdb")
// db.createCollection("students")

//create operation
// db.students.insertOne({
//     rollno:1,name:"ayush",marks:90
// })
// db.students.insertMany([
//     {rollno:2,name:"rahul",marks:80},
//     {rollno:3,name:"rohit",marks:70},
//     {rollno:4,name:"sachin",marks:60},
//     {rollno:5,name:"virat",marks:50}
// ])

//read operation
// db.students.find()
// db.students.find({marks:{$gt:70}})
// db.students.find({marks:{$gt:70}},{_id:0,rollno:1,name:1})
// db.students.find({marks:{$gt:70}},{_id:0,rollno:1,name:1}).sort({marks:-1})

//update operation
// db.students.updateOne({rollno:1},{$set:{marks:95}})
// db.students.updateMany({marks:{$lt:70}},{$set:{marks:70}})

//delete operation
// db.students.deleteOne({rollno:5})
// db.students.deleteMany({marks:{$lt:70}})