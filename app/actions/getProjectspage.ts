import axios from 'axios';



interface projectPage{
    message:string
    projectsPage:{
        projects:[],
        portfolioId:string,
        projectHeading:string
    }
}


export const getProjectsPage = async()=>{
    const res = await axios.get<projectPage>("https://portfolio-be-flame.vercel.app/api/v1/projects/")
    return res
}