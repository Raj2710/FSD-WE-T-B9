import mongoose from "mongoose"
import feedbackModel from "../model/feedback.model.js"
import usersModel from "../model/users.model.js"

const pipeline = (options=[])=>{
    let pipeline = [
        {
            $lookup:{
                from:"users",
                localField:"userId",
                foreignField:"id",
                as:"user"
            }
        },
        {$unwind:"$user"},
        {
            $project:{title:1, comments:1, rating:1, id:1, userName:"$user.name",userEmail:"$user.email", userMobile:"$user.mobile",createdAt:1,_id:0, userId:1}
        },
        ...options
    ]

    return pipeline
}

const collect = async(req,res)=>{
    try {
        let id = req.headers.id
        let {title="",comments="",rating=0} = req.body

        await feedbackModel.insertOne({userId:id,title,comments,rating})

        res.status(200).send({
            message:"Feedback Collected Successfully"
        })

    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const getFeedbackById = async(req,res)=>{
    try {

        let id = req.params.id

        const options = [
            {
                $match:{id}
            }
        ]

        let data = await feedbackModel.aggregate(pipeline(options))


        res.status(200).send({
            message:"Feedback Fetched Successfully",
            data
        })

    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const getFeedbackByuserId = async(req,res)=>{
    try {

        let {userId} = req.params

        const options = [
            {
                $match:{userId}
            }
        ]

        let data = await feedbackModel.aggregate(pipeline(options))


        res.status(200).send({
            message:"Feedback Fetched Successfully",
            data
        })

    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}



const getFeedbacks = async(req,res)=>{
    try {

        let data = await feedbackModel.aggregate(pipeline())

        console.log(data)

        res.status(200).send({
            message:"Feedbacks Fetched Successfully",
            data
        })

    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}
export default {
    collect,
    getFeedbacks,
    getFeedbackById,
    getFeedbackByuserId
}