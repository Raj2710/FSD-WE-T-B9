import { MongoClient,ObjectId } from "mongodb"
import { mongoURL, dbName } from "../utils/constants.js"

const client = new MongoClient(mongoURL)

const getAllMovies = async(req,res)=>{
    
    await client.connect()

    try {
        const db = client.db(dbName)

        const data = await db.collection('movies').find().toArray()

        res.status(200).send({
            message:"SUCCESS",
            data
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: error.message || "Internal Server Error",
            error
        })
    }
    finally{
        client.close()
    }
}

const getMovieById = async(req,res)=>{
    await client.connect()

    try {

        const {id} = req.params

        const db = client.db(dbName)

        const data = await db.collection('movies').findOne({_id: ObjectId.createFromHexString(id)})

        res.status(200).send({
            message:"SUCCESS",
            data
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: error.message || "Internal Server Error",
            error
        })
    }
    finally{
        client.close()
    }
}

export default {
    getAllMovies,
    getMovieById
}