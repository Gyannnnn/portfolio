import axios from "axios"

interface aboutPage{
    message:string
    aboutPage:{
        id:string
        aboutHeading:string
        about:string
        portfolioId:null
    }
}

export const getAbout = async()=>{
    const res = await axios.get<aboutPage>("https://portfolio-be-flame.vercel.app/api/v1/about/")
    return res
}