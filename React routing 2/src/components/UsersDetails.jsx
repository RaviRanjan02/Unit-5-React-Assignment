import { useParams } from "react-router"


export const UsersDetails=()=>{

    const {id}=useParams()

return <div> user id:{id}</div>
}