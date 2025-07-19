import axios from "axios"

interface introPage{
    message:string
    introduction:{
        id:string
        userName:string
        userHeading:string
        userBio:string
        userResumeLink:string
        userEmail:string
        userGithubId:string
        views:string
        likes:string
        userId:string
    }
}

export const getIntro = async()=>{
    const res = await axios.get<introPage>("https://portfolio-be-flame.vercel.app/api/v1/intro/get")
    return res
}