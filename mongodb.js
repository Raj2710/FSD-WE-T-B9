use guvi

//find statements
db.users.insertOne({name:'Raj'})

db.users.find()

//insert statements

db.users.insertOne({name:'Ajith',email:'ajith@gmail.com',status:true})

db.users.insertMany([
  {
		name:'Boopathi',
		email:'boopathi@outlook.com',
		status:false
	},
	{
		name:'Abdul',
		email:'abdul@outlook.com',
		status:true
	},
  {
		name:'Karthik',
		email:'karthik@gmail.com',
		status:true
	}
])

db.users.findOne({status:true})

db.users.find({status:true})

db.users.findOne({status:'true'})

//update statements

db.users.updateOne({status:'true'},{$set:{status:true}})

db.users.updateOne({status:false},{$unset:{status:null}})

db.users.updateMany({status:null},{$set:{status:false}})

db.users.find({_id:ObjectId("679f06ff1fb9eaff9f917644")})

//delete statements

db.users.deleteOne({status:false})

db.users.deleteMany({}) // this will delete all the records in the db

db.users.insertMany([{
	name:'Chandhramohan',
	email:'chan@gmail.com',
	status:true,
	batch:'B1',
	fees:3000,
	id:1
},
{
	name:'Maha',
	email:'maha@outlook.com',
	status:true,
	batch:'B1',
	fees:3000,
	id:2
},
{
	name:'Raj',
	email:'raj@gmail.com',
	status:true,
	batch:'B2',
	fees:5000,
	id:3
},
{
	name:'Mahathi',
	email:'mahathi@outlook.com',
	status:true,
	batch:'B2',
	fees:5000,
	id:4
},
{
	name:'Arun',
	email:'arun@gmail.com',
	status:true,
	batch:'B3',
	fees:7000,
	id:5
},
{
	name:'Nishanth',
	email:'nishanth@gmail.com',
	status:true,
	batch:'B5',
	fees:10000,
	id:6
},
{
	name:'Naren',
	email:'naren@gmail.com',
	status:true,
	batch:'B5',
	fees:10000,
	id:7
},
{
	name:'Dhanush',
	email:'dhanush@gmail.com',
	status:true,
	batch:'B5',
	fees:13000,
	id:8
},
{
	name:'Satish',
	email:'satish@gmail.com',
	status:true,
	batch:'B5',
	fees:13000,
	id:9
}])

//operators

db.users.find({fees:{$eq:10000}})

db.users.find({fees:{$gt:10000}})

db.users.find({fees:{$lt:10000}})

db.users.find({fees:{$gte:10000}})

db.users.find({fees:{$lte:10000}})

db.users.find({batch:{$in:['B1','B5']}})

db.users.find({batch:{$nin:['B1','B5']}})

db.marks.insertMany([
  {
    id:1,
    course:'MERN',
    userId:1,
    marks:90
  },
	{
      id:2,
      course:'MERN',
      userId:2,
      marks:100
    },
   {
      id:3,
      course:'MEAN',
      userId:1,
      marks:80
    },
    {
      id:4,
      course:'MERN',
      userId:3,
      marks:90
  	},
	{
      id:5,
      course:'MERN',
      userId:4,
      marks:90
  	},
	{
      id:6,
      course:'MERN',
      userId:5,
      marks:70
  	},
	{
		id:7,
      course:'MERN',
      userId:6,
      marks:70
    },
{
		id:8,
      course:'JFS',
      userId:6,
      marks:50
    },
{
		id:9,
      course:'MERN',
      userId:7,
      marks:70
    },
{
		id:10,
      course:'MERN',
      userId:8,
      marks:60
    },
{
		id:11,
      course:'MERN',
      userId:9,
      marks:75
    }])



//simple Logical query
db.users.find({
$and:[
  {batch:'B5'}
]})

db.users.find({
$and:[
  {batch:'B5'},
  {fees:{$gt:10000}}
]})


db.users.find({
$or:[
  {batch:'B5'},
  {batch:'B1'}
]})



db.users.find({fees:{$not:{$eq:10000}}})


db.users.find({email:/outlook/}) // -- equivalent for like in mysql 


db.users.find().toArray() // to get the data in Array of Objects

db.users.find().count()

db.users.find().limit(5)// limit the number of output records

db.users.find().limit(5).skip(10) // helps getting data in paginated way

db.users.find().forEach(function(e){
	print(e.name)
})

db.users.find().map(function(e){
	return e.name
})


db.users.find().map(function(e){
	return e.name
}).toArray()


db.users.find().map(function(e){
	return {
	name:e.name,
	email:e.email
}
}
  
//projection - get only what we need.
  
db.users.find({},{name:1,email:1})
  
  
db.users.find({},{name:1,email:1,_id:0}).toArray()

  // Ascending sort
db.users.find().sort( { name: 1 } )
// Descending sort
db.users.find().sort( { name: -1 } )
  
  
  db.users.aggregate([
  {$match:{batch:'B5'}},
  {$sort:{fees:1}}
])




  db.users.aggregate([
  {$match:{batch:'B5'}},
  {
		$group:{
  		_id:"$batch",
  		total:{$sum:"$fees"}
		}}
])
  
  db.users.aggregate([
  {
		$group:{
  		_id:"$batch",
  		total:{$sum:"$fees"}
		}}
])


  
//join two collections

db.users.aggregate([
  {
  		$lookup:{
    		from:"marks",
    		localField:"id",
    		foreignField:"userId",
    		as:"userMarks"
		}}
])


db.users.aggregate([
  {
  		$lookup:{
    		from:"marks",
    		localField:"id",
    		foreignField:"userId",
    		as:"userMarks"
		}
},
  {$unwind:"$userMarks"		}
])
  
  
  // join 2 collections with projections.
  
  db.users.aggregate([
  {
  		$lookup:{
    		from:"marks",
    		localField:"id",
    		foreignField:"userId",
    		as:"userMarks"
		}
},
  {$unwind:"$userMarks"		},

  {$project:{
		_id:0,
		id:1,
		name:1,
		email:1,
		course:"$userMarks.course",
		marks:"$userMarks.marks"
	}}
])
  
  
  //creating a view
  db.createView("performance","users",[
  {
  		$lookup:{
    		from:"marks",
    		localField:"id",
    		foreignField:"userId",
    		as:"userMarks"
		}
},
  {$unwind:"$userMarks"		},

  {$project:{
		_id:0,
		id:1,
		name:1,
		email:1,
		course:"$userMarks.course",
		marks:"$userMarks.marks"
	}}
])